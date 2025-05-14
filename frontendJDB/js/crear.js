document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-mascota');
  const fotoInput = document.getElementById('foto');
  const usuarioSelect = document.getElementById('usuario-select');
  const razaSelect = document.getElementById('raza-select');
  const categoriaSelect = document.getElementById('categoria-select');
  const generoSelect = document.getElementById('genero-select');
  const estadoSelect = document.getElementById('estado-select');
  const closeBtn = document.querySelector('.close');
  const backBtn = document.querySelector('.back');
  const API_URL = 'http://localhost:3000/api';
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

  const token = localStorage.getItem('token');
  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return;
  }

  const loadSelectOptions = async () => {
    try {
      const [usuarios, razas, categorias, generos] = await Promise.all([
        fetch(`${API_URL}/usuariojdb`, {
          headers: { 'Authorization': `Bearer ${token}` },
        }).then(res => res.json()),
        fetch(`${API_URL}/raza`, {
          headers: { 'Authorization': `Bearer ${token}` },
        }).then(res => res.json()),
        fetch(`${API_URL}/categorias`, {
          headers: { 'Authorization': `Bearer ${token}` },
        }).then(res => res.json()),
        fetch(`${API_URL}/genero`, {
          headers: { 'Authorization': `Bearer ${token}` },
        }).then(res => res.json())
      ]);

      usuarioSelect.innerHTML = '<option value="">Seleccione Usuario..</option>';
      usuarios.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario.id;
        option.textContent = usuario.nombre;
        usuarioSelect.appendChild(option);
      });

      razaSelect.innerHTML = '<option value="">Seleccione Raza..</option>';
      razas.forEach(raza => {
        const option = document.createElement('option');
        option.value = raza.id;
        option.textContent = raza.nombre;
        razaSelect.appendChild(option);
      });

      categoriaSelect.innerHTML = '<option value="">Seleccione Categoría..</option>';
      categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria.id;
        option.textContent = categoria.nombre;
        categoriaSelect.appendChild(option);
      });

      generoSelect.innerHTML = '<option value="">Seleccione Género..</option>';
      generos.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero.id;
        option.textContent = genero.nombre;
        generoSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error al cargar opciones:', error);
      alert('Error al cargar las opciones: ' + error.message);
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const usuarioId = parseInt(form.usuarioId.value);
    const razaId = parseInt(form.razaId.value);
    const categoriaId = parseInt(form.categoriaId.value);
    const generoId = parseInt(form.generoId.value);
    const estado = form.estado.value;
    const latitud = parseFloat(form.latitud.value);
    const longitud = parseFloat(form.longitud.value);
    const fotoFile = fotoInput.files[0];

    if (!nombre || !usuarioId || !razaId || !categoriaId || !generoId || !estado || isNaN(latitud) || isNaN(longitud)) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    if (fotoFile && fotoFile.size > MAX_FILE_SIZE) {
      alert('La imagen es demasiado grande. El tamaño máximo es 2MB.');
      return;
    }

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('estado', estado);
    formData.append('usuarioId', usuarioId);
    formData.append('razaId', razaId);
    formData.append('categoriaId', categoriaId);
    formData.append('generoId', generoId);
    formData.append('latitud', latitud);
    formData.append('longitud', longitud);
    if (fotoFile) {
      formData.append('foto', fotoFile);
    }

    console.log('Datos enviados a /api/mascotas:', {
      nombre,
      estado,
      usuarioId,
      razaId,
      categoriaId,
      generoId,
      latitud,
      longitud,
      foto: fotoFile ? fotoFile.name : 'sin foto',
    });

    try {
      const response = await fetch(`${API_URL}/mascotas`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al crear mascota: ${response.status} ${errorText}`);
      }

      const responseData = await response.json();
      alert('Mascota creada con éxito!');
      form.reset();
      window.location.href = 'mascotas.html';
    } catch (error) {
      console.error('Error al crear mascota:', error);
      alert('No se pudo crear la mascota: ' + error.message);
    }
  });

  closeBtn.addEventListener('click', () => window.location.href = 'mascotas.html');
  backBtn.addEventListener('click', () => window.location.href = 'mascotas.html');

  loadSelectOptions();
});