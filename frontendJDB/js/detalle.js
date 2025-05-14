document.addEventListener('DOMContentLoaded', () => {
  const mascotaFoto = document.getElementById('mascota-foto');
  const mascotaNombre = document.getElementById('mascota-nombre');
  const mascotaRaza = document.getElementById('mascota-raza');
  const mascotaCategoria = document.getElementById('mascota-categoria');
  const mascotaGenero = document.getElementById('mascota-genero');
  const mascotaEstado = document.getElementById('mascota-estado');
  const mascotaLatitud = document.getElementById('mascota-latitud');
  const mascotaLongitud = document.getElementById('mascota-longitud');
  const closeBtn = document.querySelector('.close');
  const backBtn = document.querySelector('.back');
  const API_URL = 'http://localhost:3000/api';
  const IMG_BASE_URL = 'http://localhost:3000/img/';

  const token = localStorage.getItem('token');
  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const mascotaId = urlParams.get('id');
  if (!mascotaId) {
    alert('No se proporcionó un ID de mascota.');
    window.location.href = 'mascotas.html';
    return;
  }

  const loadMascotaData = async () => {
    try {
      const response = await fetch(`${API_URL}/mascotas/${mascotaId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Error al obtener datos de la mascota');
      const mascota = await response.json();

      mascotaNombre.textContent = mascota.nombre || 'Sin nombre';
      mascotaRaza.textContent = mascota.raza ? mascota.raza.nombre : 'Sin raza';
      mascotaCategoria.textContent = mascota.categoria ? mascota.categoria.nombre : 'Sin categoría';
      mascotaGenero.textContent = mascota.genero ? mascota.genero.nombre : 'Sin género';
      mascotaEstado.textContent = mascota.estado || 'Sin estado';
      mascotaLatitud.textContent = mascota.latitud !== undefined && mascota.latitud !== null ? mascota.latitud : 'Sin latitud';
      mascotaLongitud.textContent = mascota.longitud !== undefined && mascota.longitud !== null ? mascota.longitud : 'Sin longitud';


      if (mascota.foto) {
        const fotoFileName = mascota.foto.split('/').pop();
        mascotaFoto.src = `${IMG_BASE_URL}${fotoFileName}`;
      } else {
        mascotaFoto.src = './assets/photo-lg-0.svg';
      }
    } catch (error) {
      console.error('Error al cargar datos de la mascota:', error);
      alert('No se pudo cargar la mascota: ' + error.message);
    }
  };

  closeBtn.addEventListener('click', () => {
    window.location.href = 'mascotas.html';
  });

  backBtn.addEventListener('click', () => {
    window.location.href = 'mascotas.html';
  });

  loadMascotaData();
});
