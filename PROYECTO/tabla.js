

function cargarArchivo(ruta) {
  fetch(ruta)
      .then(response => response.text())
      .then(data => procesarCSV(data))
      .catch(error => console.error("Error al cargar el archivo:", error));
}
let datosGlobales = [];

function procesarCSV(contenido) {
  const lineas = contenido.split("\n"); 
  datosGlobales = lineas.map(linea => {
      const columnas = linea.split(",");
      return {
          pais: columnas[0],
          codigo: columnas[1],
          ano: columnas[2],
          consumo: columnas[3]
      };
  });
  cargarOpcionesFiltro(datosGlobales);
  cargarDatos(datosGlobales);
}
function cargarOpcionesFiltro(datos) {
  const select = document.getElementById("filtroPais");
  select.innerHTML = '<option value="">Todos</option>';
  
  const paisesUnicos = [...new Set(datos.map(d => d.pais))].filter(Boolean);
  paisesUnicos.forEach(pais => {
      const option = document.createElement("option");
      option.value = pais;
      option.textContent = pais;
      select.appendChild(option);
  });
}
function cargarDatos(datos) {
  const tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
  tabla.innerHTML = "";
  datos.forEach(dato => {
      if (dato.pais || dato.codigo && dato.ano && dato.consumo) {
          const fila = document.createElement("tr");
          fila.innerHTML = `<td>${dato.pais}</td><td>${dato.codigo}</td><td>${dato.ano}</td><td>${dato.consumo}</td>`;
          tabla.appendChild(fila);
      }
  });
}

function filtrarPorPais() {
  const paisSeleccionado = document.getElementById("filtroPais").value;
  const datosFiltrados = paisSeleccionado ? datosGlobales.filter(d => d.pais === paisSeleccionado) : datosGlobales;
  cargarDatos(datosFiltrados);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("filtroPais").addEventListener("change", filtrarPorPais);
});
window.onload = cargarDatos();