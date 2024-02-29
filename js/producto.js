// Función para renderizar los detalles de un producto en la interfaz
function renderProducto() {
  // Obtener el producto seleccionado desde el almacenamiento local
  const producto = obtenerProductoLS();

  // Crear el contenido HTML con los detalles del producto
  let contenido = `<div class="col-md-6 offset-md-3 text-center">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    <p class="colorFuente roboto-bold">${producto.nombre}</p>
    <p class="colorFuente roboto-medium">${producto.descripcion}</p>
    <p class="colorFuente roboto-bold">$${producto.precio}</p>
    </a>
    </div>`;

  // Insertar el contenido en el elemento con el id "producto" en la interfaz
  document.getElementById("producto").innerHTML = contenido;
}

// Llamar a la función para renderizar los detalles del producto al cargar la página
renderProducto();
