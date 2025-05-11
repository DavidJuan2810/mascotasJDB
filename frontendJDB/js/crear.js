document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-mascota');
  const fotoInput = document.getElementById('foto');
  const razaSelect = document.getElementById('raza-select');
  const categoriaSelect = document.getElementById('categoria-select');
  const generoSelect = document.getElementById('genero-select');
  const usuarioSelect = document.getElementById('usuario-select');
  const closeBtn = document.querySelector('.close');
  const backBtn = document.querySelector('.back');

  const API_URL = 'http://localhost:3000/api';
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB en bytes

  // Obtener el token desde localStorage
  const token = localStorage.getItem('token');
  console.log('Token obtenido:', token);

  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return;
  }

  const loadSelectOptions = async () => {
    try {
      // Cargar usuarios
      console.log('Intentando cargar usuarios desde /api/usuariojdb...');
      const usuariosResponse = await fetch(`${API_URL}/usuariojdb`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Respuesta de usuarios:', usuariosResponse.status, usuariosResponse.statusText);
      if (!usuariosResponse.ok) {
        const errorText = await usuariosResponse.text();
        throw new Error(`Error al cargar usuarios: ${usuariosResponse.status} ${errorText}`);
      }
      const usuarios = await usuariosResponse.json();
      console.log('Usuarios obtenidos:', usuarios);
      usuarioSelect.innerHTML = '<option value="">Seleccione Usuario..</option>';
      usuarios.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario.id;
        option.textContent = usuario.nombre;
        usuarioSelect.appendChild(option);
      });

      // Cargar categorías
      console.log('Cargando categorías...');
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

      // Cargar razas
      console.log('Cargando razas...');
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

      // Cargar géneros
      console.log('Cargando géneros...');
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
    const usuarioId = parseInt(formData.get('usuarioId'));
    const razaId = parseInt(formData.get('razaId'));
    const categoriaId = parseInt(formData.get('categoriaId'));
    const generoId = parseInt(formData.get('generoId'));
    const fotoFile = fotoInput.files[0];

    // Validar tamaño de la imagen
    if (fotoFile && fotoFile.size > MAX_FILE_SIZE) {
      alert('La imagen es demasiado grande. El tamaño máximo es 2MB.');
      return;
    }

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
      usuarioId,
      razaId,
      categoriaId,
      generoId,
    };

    console.log('Datos enviados a /api/mascotas:', JSON.stringify(mascotaData, null, 2));

    try {
      const response = await fetch(`${API_URL}/mascotas`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mascotaData),
      });

      console.log('Respuesta de /api/mascotas:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error en la respuesta de /api/mascotas:', errorText);
        throw new Error(`Error al crear mascota: ${response.status} ${errorText}`);
      }

      const responseData = await response.json();
      console.log('Mascota creada:', responseData);

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

  loadSelectOptions();
});