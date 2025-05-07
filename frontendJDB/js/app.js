const API_URL = 'http://localhost:3000/api';

// Función para mostrar mensajes de error
function showError(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  setTimeout(() => {
    errorElement.textContent = '';
  }, 5000); // Ocultar mensaje después de 5 segundos
}

// Función para guardar el token en localStorage
function saveToken(token) {
  localStorage.setItem('token', token);
}

// Manejar el formulario de inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    showError('Todos los campos son obligatorios');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      showError(data.error || 'Error al iniciar sesión');
      return;
    }

    saveToken(data.token);
    window.location.href = 'mascotas.html'; // Asegúrate de que esta página exista
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    showError('Error de conexión con el servidor');
  }
});
