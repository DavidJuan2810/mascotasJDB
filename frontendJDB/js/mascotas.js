document.addEventListener('DOMContentLoaded', () => {
  const mascotaList = document.querySelector('.mascota-list');
  const closeBtn = document.querySelector('.close-btn');

  // Verificar si mascotaList existe
  if (!mascotaList) {
    console.error('Error: No se encontró el elemento .mascota-list en mascotas.html');
    return;
  }

  // URL base de tu API y para las imágenes
  const API_URL = 'http://localhost:3000/api';
  const IMG_BASE_URL = 'http://localhost:3000/img/'; // Base URL para las imágenes

  // Obtener el token de autenticación
  const token = localStorage.getItem('token');

  // Verificar si hay token
  if (!token) {
    console.error('No se encontró el token de autenticación');
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return;
  }

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

      if (!response.ok) {
        throw new Error(`Error al obtener mascotas: ${response.statusText}`);
      }
      const mascotas = await response.json();

      mascotaList.innerHTML = ''; // Limpiar la lista

      mascotas.forEach((mascota) => {
        console.log('Mascota:', mascota); // Depuración
        console.log('Foto:', mascota.foto); // Depuración

        // Extraer el nombre del archivo de la ruta
        const fotoFileName = mascota.foto ? mascota.foto.split('/').pop() : null;
        const fotoSrc = fotoFileName ? `${IMG_BASE_URL}${fotoFileName}` : './assets/img/default-pet.png';

        const mascotaItem = document.createElement('div');
        mascotaItem.classList.add('mascota-item');

        mascotaItem.innerHTML = `
          <img src="${fotoSrc}" alt="${mascota.nombre}" onerror="this.src='./assets/img/default-pet.png'; this.onerror=null;">
          <div class="mascota-info">
            <h3>${mascota.nombre}</h3>
            <p>${mascota.raza?.nombre || 'Sin raza'}</p>
          </div>
          <div class="mascota-actions">
            <button class="lupa-btn" data-id="${mascota.id}"><img src="./assets/btn-show.svg" alt="Detalles"></button>
            <button class="view-btn" data-id="${mascota.id}"><img src="./assets/btn-edit.svg" alt="Editar"></button>
            <button class="delete-btn" data-id="${mascota.id}"><img src="./assets/btn-delete.svg" alt="Eliminar"></button>
          </div>
        `;

        mascotaList.appendChild(mascotaItem);
      });

      // Añadir eventos a los botones
      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          await deleteMascota(id);
        });
      });

      document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          window.location.href = `editar.html?id=${id}`; // Redirigir a la página de edición
        });
      });

      document.querySelectorAll('.lupa-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          window.location.href = `detalle.html?id=${id}`; // Redirigir a la página de detalles
        });
      });
    } catch (error) {
      console.error('Error al cargar mascotas:', error);
      mascotaList.innerHTML = '<p style="color: #ecf0f1;">Error al cargar las mascotas.</p>';
    }
  };

  // Eliminar una mascota
  const deleteMascota = async (id) => {
    if (confirm('¿Estás seguro de eliminar esta mascota?')) {
      try {
        const response = await fetch(`${API_URL}/mascotas/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error('Error al eliminar mascota');
        await loadMascotas(); // Recargar la lista después de eliminar
      } catch (error) {
        console.error('Error al eliminar mascota:', error);
        alert('No se pudo eliminar la mascota.');
      }
    }
  };

  // Cerrar la ventana
  closeBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  // Cargar las mascotas al iniciar
  loadMascotas();
});