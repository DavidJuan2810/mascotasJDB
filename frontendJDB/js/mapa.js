document.addEventListener('DOMContentLoaded', async () => {
  const API_URL = 'http://localhost:3000/api/mascotas';
  const token = localStorage.getItem('token');

  // Crear el mapa centrado en Colombia
  const map = L.map('map', {
    minZoom: 5,
    maxZoom: 18
  }).setView([4.5709, -74.2973], 6.5);

  // Limitar los límites del mapa a Colombia
  map.setMaxBounds([
    [12.5, -79],  // esquina superior izquierda (noroeste)
    [-4.5, -66]   // esquina inferior derecha (sureste)
  ]);

  // Capa base del mapa
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  try {
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) throw new Error('Error al obtener mascotas');

    const mascotas = await response.json();

    mascotas.forEach(mascota => {
      if (mascota.latitud && mascota.longitud) {
        const marker = L.marker([mascota.latitud, mascota.longitud]).addTo(map);

        marker.bindPopup(`
          <strong>${mascota.nombre}</strong><br>
          Estado: ${mascota.estado}<br>
          Género: ${mascota.genero || 'N/A'}<br>
          Raza: ${mascota.raza?.nombre || 'N/A'}<br>
          Categoría: ${mascota.categoria?.nombre || 'N/A'}<br>
          Usuario: ${mascota.usuario?.nombre || 'N/A'}<br>
          Latitud: ${mascota.latitud}<br>
          Longitud: ${mascota.longitud}
        `);
      }
    });
  } catch (error) {
    console.error('Error al cargar el mapa de mascotas:', error);
    alert('No se pudo cargar el mapa de mascotas.');
  }
});
