// Cargar mascotas desde localStorage o inicializar array vacío
let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];

// Función para guardar mascotas en localStorage
function guardarMascotas() {
  localStorage.setItem('mascotas', JSON.stringify(mascotas));
}

// Manejar el formulario de creación de mascotas
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mascota-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Obtener datos del formulario
      const nombre = document.getElementById('nombre').value;
      const raza = document.getElementById('raza').value;
      const imagenInput = document.getElementById('imagen');
      let imagen = './assets/photo-lg-1.svg'; // Imagen por defecto

      // Si se subió una imagen, convertirla a base64 (opcional)
      if (imagenInput.files && imagenInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          imagen = event.target.result; // Imagen en base64
          const nuevaMascota = { nombre, raza, imagen };
          mascotas.push(nuevaMascota);
          guardarMascotas();
          window.location.href = 'mascotas.html'; // Redirigir a la lista
        };
        reader.readAsDataURL(imagenInput.files[0]);
      } else {
        // Sin imagen, usar la predeterminada
        const nuevaMascota = { nombre, raza, imagen };
        mascotas.push(nuevaMascota);
        guardarMascotas();
        window.location.href = 'mascotas.html';
      }
    });
  }

  // Mostrar las mascotas en la lista (index.html)
  const mascotaList = document.querySelector('.mascota-list');
  if (mascotaList) {
    // Limpiar la lista (excepto el botón de agregar)
    mascotaList.innerHTML = `
      <a href="crear.html">
        <img src="./assets/btn-add.svg" alt="btn-add">
      </a>
    `;

    // Generar un bloque por cada mascota
    mascotas.forEach((mascota, index) => {
      const mascotaItem = document.createElement('div');
      mascotaItem.classList.add('mascota-item');
      mascotaItem.innerHTML = `
        <img class="avatar" src="${mascota.imagen}" alt="${mascota.nombre}">
        <div class="info">
          <span class="nombre">${mascota.nombre}</span>
          <span class="raza">${mascota.raza}</span>
        </div>
        <div class="actions">
          <button class="action-btn"><img src="./assets/btn-show.svg" alt="lupa"></button>
          <button class="action-btn">✏️</button>
          <button class="delete-btn" onclick="eliminarMascota(${index})">🗑️</button>
        </div>
      `;
      mascotaList.appendChild(mascotaItem);
    });
  }
});

// Función para eliminar una mascota
function eliminarMascota(index) {
  if (confirm('¿Estás seguro de eliminar esta mascota?')) {
    mascotas.splice(index, 1); // Eliminar del array
    guardarMascotas(); // Actualizar localStorage
    location.reload(); // Recargar la página
  }
}