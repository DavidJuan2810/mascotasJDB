document.addEventListener('DOMContentLoaded', () => {
  const mascotaList = document.getElementById('mascota-list');
  const closeBtn = document.querySelector('.close-btn');

  // URL base de tu API (ajusta según tu configuración)
  const API_URL = 'http://localhost:3000'; // Cambia esto según la URL de tu backend

  // Obtener el token de autenticación (asumo que está en localStorage)
  const token = localStorage.getItem('authToken'); // Ajusta según cómo manejes el token

  // Cargar mascotas desde el backend
  const loadMascotas = async () => {
    try {
      const response = await fetch(`${API_URL}/mascotas`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Error al obtener mascotas');
      const mascotas = await response.json();

      mascotaList.innerHTML = ''; // Limpiar la lista

      mascotas.forEach((mascota, index) => {
        const mascotaItem = document.createElement('div');
        mascotaItem.classList.add('mascota-item');

        mascotaItem.innerHTML = `
          <img src="${mascota.foto || 'assets/img/default-pet.png'}" alt="${mascota.nombre}">
          <div class="mascota-info">
            <h3>${mascota.nombre}</h3>
            <p>${mascota.raza?.nombre || 'Sin raza'}</p>
          </div>
          <div class="mascota-actions">
            <button class="view-btn"><img src="assets/img/view-icon.png" alt="Ver"></button>
            <button class="delete-btn" data-id="${mascota.id}"><img src="assets/img/delete-icon.png" alt="Eliminar"></button>
          </div>
        `;

        mascotaList.appendChild(mascotaItem);
      });

      // Añadir evento a los botones de eliminar
      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          await deleteMascota(id);
        });
      });
    } catch (error) {
      console.error('Error al cargar mascotas:', error);
      mascotaList.innerHTML = '<p>Error al cargar las mascotas.</p>';
    }
  };

  // Eliminar una mascota
  const deleteMascota = async (id) => {
    try {
      const response = await fetch(`${API_URL}/mascotas/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Error al eliminar mascota');
      loadMascotas(); // Recargar la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar mascota:', error);
      alert('No se pudo eliminar la mascota.');
    }
  };

  // Cerrar la ventana
  closeBtn.addEventListener('click', () => {
    window.location.href = 'index.html'; // O la página principal que desees
  });

  // Cargar las mascotas al iniciar
  loadMascotas();
});