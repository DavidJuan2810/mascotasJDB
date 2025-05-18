let currentEstado = '';
let chartInstance = null;
let currentChartIndex = 0; // Índice para rastrear qué gráfica está activa (0: estados, 1: razas)
const API_URL = 'http://localhost:3000/api';

// Función para cargar los datos de mascotas desde el backend (usada para las gráficas)
async function fetchMascotas() {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return [];
  }

  try {
    const response = await fetch(`${API_URL}/mascotas`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener mascotas: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al cargar mascotas:', error);
    return [];
  }
}

// Función para crear la gráfica de estados (la original)
function createEstadoChart(ctx, allMascotas) {
  const counts = {
    disponible: allMascotas.filter(m => m.estado === 'disponible').length,
    adoptado: allMascotas.filter(m => m.estado === 'adoptado').length,
  };

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Disponibles', 'Adoptadas'],
      datasets: [{
        label: '',
        data: [counts.disponible, counts.adoptado],
        backgroundColor: ['#ff8000', '#0000FF'],
        borderColor: '#104E8B',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Cantidad',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Estado',
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Distribución de Mascotas por Estado',
          font: { size: 16 },
          color: '#1E90FF',
        },
      },
    },
  });
}

// Nueva función para crear la gráfica de razas
function createRazaChart(ctx, allMascotas) {
  // Agrupar mascotas por raza
  const razaCounts = {};
  allMascotas.forEach(mascota => {
    const razaNombre = mascota.raza?.nombre || 'Desconocida';
    razaCounts[razaNombre] = (razaCounts[razaNombre] || 0) + 1;
  });

  const labels = Object.keys(razaCounts);
  const data = Object.values(razaCounts);

  // Generar colores dinámicos para cada raza
  const backgroundColors = labels.map((_, index) => {
    const hue = (index * 137.5) % 360; // Genera colores distintos usando una constante áurea
    return `hsl(${hue}, 70%, 50%)`;
  });

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '',
        data: data,
        backgroundColor: backgroundColors,
        borderColor: '#104E8B',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Cantidad',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Raza',
            ticks: {
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Distribución de Mascotas por Raza',
          font: { size: 16 },
          color: '#1E90FF',
        },
      },
    },
  });
}

// Función para cargar el gráfico
async function loadChart() {
  const chartContainer = document.querySelector('.chart-container');
  const chartCanvas = document.getElementById('chartCanvas');

  const allMascotas = await fetchMascotas();

  // Verificar si hay datos
  if (allMascotas.length === 0) {
    chartContainer.innerHTML = '<p style="color: #fff; text-align: center;">No hay datos para mostrar el gráfico.</p>';
    return;
  }

  chartCanvas.style.display = 'block';
  chartCanvas.width = chartContainer.clientWidth;
  chartCanvas.height = 300;

  const ctx = chartCanvas.getContext('2d');

  // Mostrar la gráfica inicial (estados)
  currentChartIndex = 0;
  chartInstance = createEstadoChart(ctx, allMascotas);
}

// Función para cambiar entre gráficas
function switchChart(direction) {
  const chartCanvas = document.getElementById('chartCanvas');
  const ctx = chartCanvas.getContext('2d');

  // Destruir la gráfica actual
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Actualizar índice
  currentChartIndex = (currentChartIndex + direction + 2) % 2; // 2 gráficas: 0 (estados), 1 (razas)

  // Volver a cargar los datos
  fetchMascotas().then(allMascotas => {
    if (allMascotas.length === 0) {
      document.querySelector('.chart-container').innerHTML = '<p style="color: #fff; text-align: center;">No hay datos para mostrar el gráfico.</p>';
      return;
    }

    chartCanvas.style.display = 'block';
    chartCanvas.width = chartCanvas.parentElement.clientWidth;
    chartCanvas.height = 300;

    // Crear la gráfica correspondiente
    if (currentChartIndex === 0) {
      chartInstance = createEstadoChart(ctx, allMascotas);
    } else {
      chartInstance = createRazaChart(ctx, allMascotas);
    }
  });
}

// Cargar el gráfico al abrir la página
window.onload = function () {
  loadChart();
};

// Cargar reporte para la tabla
async function loadReport(estado) {
  currentEstado = estado;
  const token = localStorage.getItem('token');
  const tableBody = document.getElementById('reportBody');
  const downloadBtn = document.querySelector('.download-btn');
  const pdfBtn = document.querySelector('.download-pdf');

  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return;
  }

  try {
    const response = await fetch(`${API_URL}/reportes/${estado}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener reporte: ${response.status} - ${response.statusText}`);
    }

    const mascotas = await response.json();

    console.log('Datos recibidos:', mascotas);

    tableBody.innerHTML = '';
    mascotas.forEach(mascota => {
      const row = document.createElement('tr');
      const genero = mascota.genero?.nombre || 'N/A';
      row.innerHTML = `
        <td>${mascota.nombre || 'N/A'}</td>
        <td>${mascota.estado || 'N/A'}</td>
        <td>${genero}</td>
        <td>${mascota.raza?.nombre || 'N/A'}</td>
        <td>${mascota.categoria?.nombre || 'N/A'}</td>
        <td>${mascota.usuario?.nombre || 'N/A'}</td>
        <td>${mascota.latitud?.toString() || 'N/A'}</td>
        <td>${mascota.longitud?.toString() || 'N/A'}</td>
      `;
      tableBody.appendChild(row);
    });

    const hasData = mascotas.length > 0;
    downloadBtn.style.display = hasData ? 'block' : 'none';
    pdfBtn.style.display = hasData ? 'block' : 'none';
  } catch (error) {}
}

// Descargar PDF desde backend
async function downloadPDF() {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    return;
  }

  if (!currentEstado) {
    alert('No hay reporte para descargar. Por favor, selecciona un reporte primero.');
    return;
  }

  const url = `${API_URL}/reportes/${currentEstado}?format=pdf`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error al descargar PDF: ${response.status} - ${response.statusText}. Detalles: ${errorText}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `reporte_mascotas_${currentEstado}_${Date.now()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error al descargar el PDF:', error);
    alert(`No se pudo descargar el PDF: ${error.message}`);
  }
}

// Descargar gráfico como imagen
function downloadChart() {
  const chartCanvas = document.getElementById('chartCanvas');

  if (!chartCanvas || chartCanvas.style.display === 'none' || !chartInstance) {
    alert('No hay gráfico para descargar. Asegúrate de que el gráfico esté visible.');
    return;
  }

  setTimeout(() => {
    try {
      const dataUrl = chartCanvas.toDataURL('image/png');
      if (dataUrl === 'data:,') {
        throw new Error('El canvas está vacío');
      }
      const link = document.createElement('a');
      const chartName = currentChartIndex === 0 ? 'estados' : 'razas';
      link.download = `grafico_mascotas_${chartName}_${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      alert('No se pudo descargar el gráfico: ' + error.message);
    }
  }, 1500);
}