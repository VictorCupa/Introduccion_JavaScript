console.log('***programacion orientada a objetos***')

//Object literal

const producto ={
    nombre: 'parlante',
    precio:46456
}

//Object Constructor

function Producto(nombre, precio, color) {
     this.nombre = nombre;
     this.precio = precio;
     this.color = color;
}
console.log('prototype permite crear funciones que solo se utilizan en un objeto en especifico');
Producto.prototype.formatearProducto=function(){
    return`El producto ${this.nombre}, tiene un precio de ${this.precio} y es de color ${this.color}`
}
const Producto2= new Producto('portail dell',5646,'gris');
const Producto3= new Producto('portail lenovo',56456,'blanco');

function formatearProducto(producto){
    return `El producto ${producto.nombre},tiene un precio de : ${producto.precio}`;
}
console.log(Producto2);
console.log(Producto2.formatearproducto());
console.log(Producto3);




