const productos = [
  {id:1, nombre:"TrueMade Whey Protein", imagen:"https://www.enasport.com/cdn/shop/files/7792981060021_2_f1b5bea7-4b41-47cc-acd7-c855169e2cb7_800x.jpg?v=1699874513", descripcion:"Whey Protein Isolate (WPI) es la forma más pura de proteína de suero que existe actualmente. Al sumarla a nuestra fórmula clásica (WPC + WPI) elevamos el estándar de calidad, asegurándote un mejor producto en cada scoop para que logres la performance que buscas.", precio:18000},
  {id:2, nombre:"Creatina Micronizada", imagen:"https://www.enasport.com/cdn/shop/products/Creatina_Micronizada_neutra_800x.jpg?v=1706886860", descripcion:"Nuestra CREATINA MICRONIZADA es un excelente suplemento pre entrenamiento ya que colabora en la formación de los componentes energéticos, mejora la potencia muscular y retrasa la fatiga muscular, preparando al cuerpo para un mejor rendimiento físico Ha sido demostrado que apoya el crecimiento del tamaño de los músculos, y el aumento de fuerza y poder cuando se la combina con actividades de alta intensidad.", precio:30500},
  {id:3, nombre:"Whey X Pro", imagen:"https://www.enasport.com/cdn/shop/products/Whey_xpro_vainilla_800x.jpg?v=1685711301", descripcion:"Whey X Pro Complex Protein aporta una combinación explosiva de proteínas, creatina, aminoácidos, vitaminas, minerales y antioxidantes, en una nueva fórmula mejorada. Aporta más sabor y una máxima disolución para lograr mejores resultados y la podés consumir antes o después del entrenamiento. Es la proteína de suero más avanzada del mercado.", precio:39800},
  {id:4, nombre:"Pre War", imagen:"https://www.enasport.com/cdn/shop/products/Prewar_Fruit_800x.jpg?v=1640023916", descripcion:"PRE WAR es la siguiente evolución en pre entrenamientos. Diseñado con precisión para desafiar tus límites, favorece la concentración, el aumento de energía, la fuerza, el tamaño muscular y la recuperación. Entrena con nuestro Pre work más completo y con fórmula mejorada con 200mg de cafeína por ingesta.", precio:26000},
  {id:5, nombre:"Re Load", imagen:"https://www.enasport.com/cdn/shop/products/Reload_Fruit_800x.jpg?v=1683514967", descripcion:"RELOAD es lo último en post entrenamiento. Ideal para después de un entrenamiento intenso. Te traemos el mejor ratio de BCAA (2:1:1) con la cantidad exacta que necesitas para recuperarte más rápido y volver nuevamente al juego.", precio:18000},
  {id:6, nombre:"Truemade Amino Full", imagen:"https://www.enasport.com/cdn/shop/files/Truemade_Amino_Full_0c56c67e-45fd-4b6f-8bc6-c18db5ec5750_800x.jpg?v=1685712300", descripcion:"AMINO FULL contiene una combinación de aminoácidos de cadena ramificada (Leucina, Isoleucina, Valina) en un ratio 2:1:1; que son indispensables para el desarrollo y una mejor y más rápida recuperación de la masa muscular. La fórmula se complementa con L- Citrulina y L-Glutamina, ayudando a reducir la fatiga, ya que mantienen a las células en buen estado y trabajan sobre la reparación tejidos; ideales para mejorar el rendimiento, ganar fuerza y masa muscular.", precio:15000}
];


const guardarProductosLS = (productos) => {
  localStorage.setItem("productos", JSON.stringify(productos));
}


const obtenerProductosLS = () => {
  return JSON.parse(localStorage.getItem("productos")) || [];
}


const guardarCarritoLS = (productos) => {
  localStorage.setItem("carrito", JSON.stringify(productos));
}


const obtenerCarritoLS = () => {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}


const obtenerIdProductoLS = () => {
  return JSON.parse(localStorage.getItem("producto")) || 0;
}


const cantTotalProductos = () => {
  const carrito = obtenerCarritoLS();


  return carrito.length;
}


const renderTotalCarrito = () => {
  document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
}


const verProducto = (id) => {
  localStorage.setItem("producto", JSON.stringify(id));
}


const obtenerProductoLS = () => {
  const productos = obtenerProductosLS();
  const id = obtenerIdProductoLS();
  const producto = productos.find(item => item.id === id);


  return producto;
}


guardarProductosLS(productos);