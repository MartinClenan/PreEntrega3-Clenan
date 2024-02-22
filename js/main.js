class Carrito {
  constructor() {
    this.productos = [];
    this.descuento = 10;
    this.maxProductosParaDescuento = 4;
  }

  agregarProducto(id) {
    let producto = productos.find((product) => product.id === id);
    if (producto) {
      this.productos.push(producto);
      console.log("Agregaste el producto # " + id + " al Carrito");
    } else {
      console.log("No se encontró el producto con # " + id + "!");
    }
  }

  listaCarrito() {
    this.productos.forEach((item) => {
      console.log(item.id + " - " + item.nombre + " - " + item.precio);
    });
  }

  calcularTotalProductos() {
    return this.productos.length;
  }

  calcularTotalPagar() {
    let total = 0;
    this.productos.forEach((item) => {
      total += item.precio;
    });
    return total;
  }

  aplicarDescuento() {
    if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
      return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
    } else {
      return 0;
    }
  }

  calcularSumaTotalProductos() {
    return this.calcularTotalPagar();
  }
}

const productos = [
  { id: 1, nombre: "Proteína Whey Pro 2.0", tamaño: "1kg", precio: 18000 },
  { id: 2, nombre: "TrueMade Whey Protein", tamaño: "930g", precio: 32000 },
  { id: 3, nombre: "Creatina Crea Shock", tamaño: "300g", precio: 15000 },
  { id: 4, nombre: "Creatina Micronizada", tamaño: "300kg", precio: 18000 },
  { id: 5, nombre: "Bcaa Recovery", tamaño: "300g", precio: 15000 },
  { id: 6, nombre: "Gluta Reload", tamaño: "500g", precio: 25000 },
];

let usuario = prompt("Ingrese su nombre de usuario: ");
let categoria;
let proteinas;
let creatinas;
let aminoacidos;

const carrito = new Carrito(); // Instanciamos el carrito

do {
  function saludarUsuario() {
    return (
      "Hola " +
      usuario +
      " seleccione el tipo de categoría de producto a comprar"
    );
  }
  alert(saludarUsuario());

  do {
    categoria = prompt(
      "Elija opción a realizar : \n 1-Proteínas. \n 2-Creatinas. \n 3-Aminoácidos."
    );

    switch (categoria) {
      case "1":
        proteinas = prompt(
          "Elija qué proteína desea: \n 1-Proteína Whey Pro 2.0. \n 2-TrueMade Whey Protein"
        );
        switch (proteinas) {
          case "1":
            console.log("Elegiste la Proteína Whey Pro 2.0");
            carrito.agregarProducto(1); // Se agrega el producto al carrito
            break;

          case "2":
            console.log("Elegiste TrueMade Whey Protein");
            carrito.agregarProducto(2); // Se agrega el producto al carrito
            break;

          default:
            console.log("Opción no válida");
        }
        break;

      case "2":
        creatinas = prompt(
          "Elija qué creatina desea: \n 1-Creatina Crea Shock. \n 2-Creatina Micronizada."
        );
        switch (creatinas) {
          case "1":
            console.log("Elegiste Creatina Crea Shock");
            carrito.agregarProducto(3); // Se agrega el producto al carrito
            break;

          case "2":
            console.log("Elegiste Creatina Micronizada");
            carrito.agregarProducto(4); // Se agrega el producto al carrito
            break;

          default:
            console.log("Opción no válida");
        }
        break;

      case "3":
        aminoacidos = prompt(
          "Elija qué aminoácido desea: \n 1-Bcaa Recovery. \n 2-Gluta Reload."
        );
        switch (aminoacidos) {
          case "1":
            console.log("Elegiste Bcaa Recovery");
            carrito.agregarProducto(5); // Se agrega el producto al carrito
            break;

          case "2":
            console.log("Elegiste Gluta Reload");
            carrito.agregarProducto(6); // Se agrega el producto al carrito
            break;

          default:
            console.log("Opción no válida");
        }
        break;

      default:
        console.log("Opción no válida");
    }

    // Preguntar si desea realizar otra compra
    var otraCompra = prompt(
      "¿Desea realizar otra compra? (Sí/No)"
    ).toLowerCase();
  } while (otraCompra === "si");

  console.log("Detalles del Carrito:");
  carrito.listaCarrito();
  console.log(
    "Total de productos en el carrito: " + carrito.calcularTotalProductos()
  );
  console.log("Total de la compra: $" + carrito.calcularSumaTotalProductos());
  let descuento = carrito.aplicarDescuento();
  console.log("Descuento aplicado: $" + descuento);
  console.log(
    "Total a pagar con descuento: $" +
      (carrito.calcularSumaTotalProductos() - descuento)
  );

  var VerCategoriasDeNuevo = confirm("¿Desea ver las categorías de nuevo?");
} while (VerCategoriasDeNuevo);
