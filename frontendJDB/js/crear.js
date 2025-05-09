document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-mascota');
  const fotoInput = document.getElementById('foto');
  const razaSelect = document.getElementById('raza-select');
  const categoriaSelect = document.getElementById('categoria-select');
  const generoSelect = document.getElementById('genero-select');
  const closeBtn = document.querySelector('.close');
  const backBtn = document.querySelector('.back');

  const API_URL = 'http://localhost:3000/api';

  // ✅ Obtener el token desde localStorage
  const token = localStorage.getItem('token');

  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return;
  }

  const loadSelectOptions = async () => {
    try {
      const categoriasResponse = await fetch(`${API_URL}/categorias`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!categoriasResponse.ok) {
        throw new Error(`Error al cargar categorías: ${categoriasResponse.statusText}`);
      }
      const categorias = await categoriasResponse.json();
      categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria.id;
        option.textContent = categoria.nombre;
        categoriaSelect.appendChild(option);
      });

      const razasResponse = await fetch(`${API_URL}/raza`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!razasResponse.ok) {
        throw new Error(`Error al cargar razas: ${razasResponse.statusText}`);
      }
      const razas = await razasResponse.json();
      razas.forEach(raza => {
        const option = document.createElement('option');
        option.value = raza.id;
        option.textContent = raza.nombre;
        razaSelect.appendChild(option);
      });

      const generosResponse = await fetch(`${API_URL}/genero`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!generosResponse.ok) {
        throw new Error(`Error al cargar géneros: ${generosResponse.statusText}`);
      }
      const generos = await generosResponse.json();
      generos.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero.id;
        option.textContent = genero.nombre;
        generoSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error al cargar opciones:', error.message);
      alert('Error al cargar las opciones: ' + error.message);
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const nombre = formData.get('nombre');
    const razaId = parseInt(formData.get('razaId'));
    const categoriaId = parseInt(formData.get('categoriaId'));
    const generoId = parseInt(formData.get('generoId'));
    const fotoFile = fotoInput.files[0];

    let foto = '';
    if (fotoFile) {
      const reader = new FileReader();
      reader.readAsDataURL(fotoFile);
      await new Promise(resolve => {
        reader.onload = () => {
          foto = reader.result;
          resolve();
        };
      });
    }

    const mascotaData = {
      nombre,
      foto,
      estado: 'disponible',
      usuarioId: 1, // ⚠️ Ajusta este ID al del usuario autenticado
      razaId,
      categoriaId,
      generoId,
    };

    try {
      const response = await fetch(`${API_URL}/mascotas`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mascotaData),
      });

      if (!response.ok) {
        throw new Error(`Error al crear mascota: ${response.statusText}`);
      }

      window.location.href = 'mascotas.html';
    } catch (error) {
      console.error('Error al crear mascota:', error.message);
      alert('No se pudo crear la mascota: ' + error.message);
    }
  });

  closeBtn.addEventListener('click', () => {
    window.location.href = 'mascotas.html';
  });

  backBtn.addEventListener('click', () => {
    window.location.href = 'mascotas.html';
  });

  // ✅ Cargar select al cargar la página
  loadSelectOptions();
});
