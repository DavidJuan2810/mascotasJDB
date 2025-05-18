let currentEstado = '';
let chartInstance = null;
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

// Función para cargar el gráfico al inicio
async function loadChart() {
  const chartContainer = document.querySelector('.chart-container');
  const chartCanvas = document.getElementById('chartCanvas');

  const allMascotas = await fetchMascotas();

  const counts = {
    disponible: allMascotas.filter(m => m.estado === 'disponible').length,
    adoptado: allMascotas.filter(m => m.estado === 'adoptado').length,
  };

  // Verificar si hay datos para mostrar el gráfico
  if (counts.disponible + counts.adoptado === 0) {
    chartContainer.innerHTML = '<p style="color: #fff; text-align: center;">No hay datos para mostrar el gráfico.</p>';
    return;
  }

  chartCanvas.style.display = 'block';
  chartCanvas.width = chartContainer.clientWidth;
  chartCanvas.height = 300;

  const ctx = chartCanvas.getContext('2d');
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Disponibles', 'Adoptadas'],
      datasets: [{
        label: '', // Oculta el nombre del dataset
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
          display: false, // Oculta el cuadro de "Cantidad de Mascotas"
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
  } catch (error) {
      
  }
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
      link.download = `grafico_mascotas_${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      alert('No se pudo descargar el gráfico: ' + error.message);
    }
  }, 1500);
}