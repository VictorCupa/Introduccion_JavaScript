console.log('**************Destructurin objets in js*********************');

const producto ={
    nombreProducto:'portatil DELL',
    precio: 1000,
    cantidadDisponible: true 
}

//crear una nueva variable dentro del objeto
producto.color = 'gray';
const precioProducto = producto.precio;
const colorProducto = producto.color;

console.log(precioProducto, colorProducto);

//destructuring para sacar propiedades de un objeto y crear una variable en una sola linea

const {color,precio,nombreProducto,cantidadDisponible} = producto;
console.log(precio,nombreProducto,cantidadDisponible);