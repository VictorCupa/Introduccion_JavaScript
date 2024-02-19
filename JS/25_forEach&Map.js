console.log('****forEach and  Map****');

const carrito = [
    {nombre:'portatil Dell', precio:10},
    {nombre:'monitor samsung', precio:15},
    {nombre:'teclado genius', precio:7},
    {nombre:'audifonos', precio:12},
    {nombre:'consola videgames', precio:4},
    {nombre:'mouse', precio:12},
    {nombre:'impresora hp', precio:14},
]

//for each carrito

carrito.forEach(function(producto) {
    console.log(`el articulo ${producto.nombre} cuesta: ${producto.precio}$`);
});
console.log('aqui se esta iterando el objeto carrito con un arrow function');
//arrow function forEach
carrito.forEach(producto => console.log(`el articulo ${producto.nombre} cuesta: ${producto.precio}$`));

// map

console.log('aqui se esta iterando el objeto carrito con un map');
carrito.map(producto => console.log(`el articulo ${producto.nombre} cuesta: ${producto.precio}$`));