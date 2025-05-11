document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-mascota');
  const fotoInput = document.getElementById('foto');
  const fotoPreview = document.getElementById('foto-preview');
  const nombreInput = document.getElementById('nombre');
  const razaSelect = document.getElementById('raza-select');
  const categoriaSelect = document.getElementById('categoria-select');
  const generoSelect = document.getElementById('genero-select');
  const estadoSelect = document.getElementById('estado-select');
  const closeBtn = document.querySelector('.close');
  const backBtn = document.querySelector('.back');
  const API_URL = 'http://localhost:3000/api';
  const IMG_BASE_URL = 'http://localhost:3000/img/'; // Base URL para las imágenes
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB en bytes

  // Obtener token desde localStorage
  const token = localStorage.getItem('token');
  if (!token) {
    alert('No estás autenticado. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    return;
  }

  // Obtener el ID de la mascota desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const mascotaId = urlParams.get('id');
  if (!mascotaId) {
    alert('No se proporcionó un ID de mascota.');
    window.location.href = 'mascotas.html';
    return;
  }

  const loadSelectOptions = async () => {
    try {
      const [razas, categorias, generos] = await Promise.all([
        fetch(`${API_URL}/raza`, {
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        }).then(res => res.json()),
        fetch(`${API_URL}/categorias`, {
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        }).then(res => res.json()),
        fetch(`${API_URL}/genero`, {
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        }).then(res => res.json()),
      ]);

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

      // Poblar los campos con los datos de la mascota
      nombreInput.value = mascota.nombre || '';
      razaSelect.value = mascota.razaId ? mascota.razaId.toString() : '';
      categoriaSelect.value = mascota.categoriaId ? mascota.categoriaId.toString() : '';
      generoSelect.value = mascota.generoId ? mascota.generoId.toString() : '';
      estadoSelect.value = mascota.estado || '';

      // Cargar la foto previa
      if (mascota.foto) {
        const fotoFileName = mascota.foto.split('/').pop();
        fotoPreview.src = `${IMG_BASE_URL}${fotoFileName}`;
      } else {
        fotoPreview.src = './assets/photo-lg-0.svg';
      }
    } catch (error) {
      console.error('Error al cargar datos de la mascota:', error);
      alert('No se pudo cargar la mascota: ' + error.message);
    }
  };

  // Evento para previsualizar la nueva foto
  fotoPreview.addEventListener('click', () => fotoInput.click());
  fotoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        fotoPreview.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const razaId = parseInt(razaSelect.value);
    const categoriaId = parseInt(categoriaSelect.value);
    const generoId = parseInt(generoSelect.value);
    const estado = estadoSelect.value;
    const fotoFile = fotoInput.files[0];

    // Validación
    if (!nombre || !razaId || !categoriaId || !generoId || !estado) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    if (fotoFile && fotoFile.size > MAX_FILE_SIZE) {
      alert('La imagen es demasiado grande. El tamaño máximo es 2MB.');
      return;
    }

    // Usar FormData para enviar los datos como multipart/form-data
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('estado', estado);
    formData.append('razaId', razaId);
    formData.append('categoriaId', categoriaId);
    formData.append('generoId', generoId);
    if (fotoFile) {
      formData.append('foto', fotoFile);
    }

    console.log('Datos enviados a /api/mascotas/:id:', {
      nombre,
      estado,
      razaId,
      categoriaId,
      generoId,
      foto: fotoFile ? fotoFile.name : 'sin cambio',
    });

    try {
      const response = await fetch(`${API_URL}/mascotas/${mascotaId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al modificar mascota: ${response.status} ${errorText}`);
      }

      const responseData = await response.json();
      alert('Mascota modificada con éxito!');
      window.location.href = 'mascotas.html';
    } catch (error) {
      console.error('Error al modificar mascota:', error);
      alert('No se pudo modificar la mascota: ' + error.message);
    }
  });

  closeBtn.addEventListener('click', () => {
    window.location.href = 'mascotas.html';
  });

  backBtn.addEventListener('click', () => {
    window.location.href = 'mascotas.html';
  });

  loadSelectOptions();
  loadMascotaData();
});