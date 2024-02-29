// Función para renderizar productos en la página
function renderProductos() {
  // Obtener la lista de productos desde el almacenamiento local
  const productos = obtenerProductosLS();

  // Inicializar una cadena vacía para construir el contenido HTML dinámicamente
  let contenido = "";

  // Iterar sobre cada producto en la lista
  for (const producto of productos) {
    // Construir el fragmento de HTML para un producto y agregarlo al contenido
    contenido += `<div class="col-md-4 text-center">
      <a href="producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src="${producto.imagen}" alt="${producto.nombre}" height="244" />
        <p class="colorFuente roboto-bold">${producto.nombre}</p>
      </a>
    </div>`;
  }

  // Establecer el contenido HTML en el elemento con ID "productos" en el DOM
  document.getElementById("productos").innerHTML = contenido;
}

// Llamar a la función para renderizar productos
renderProductos();
