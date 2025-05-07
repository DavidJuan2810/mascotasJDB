document.addEventListener("DOMContentLoaded", () => {
    const URL_BASE = "http://localhost:8080"; // Asegúrate que el puerto y la URL coincidan con tu backend
  
    const razaSelect = document.getElementById("raza-select");
    const categoriaSelect = document.getElementById("categoria-select");
    const generoSelect = document.getElementById("genero-select");
  
    function cargarDatos(endpoint, selectElement) {
      fetch(`${URL_BASE}/${endpoint}`)
        .then(res => res.json())
        .then(data => {
          data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.nombre;
            selectElement.appendChild(option);
          });
        })
        .catch(error => console.error(`Error cargando ${endpoint}:`, error));
    }
  
    cargarDatos("razas", razaSelect);
    cargarDatos("categorias", categoriaSelect);
})  