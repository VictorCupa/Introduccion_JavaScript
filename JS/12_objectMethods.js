//"use strict";//correr javascript en modo estricto
console.log('************ Object Methods *****************');

// agregar propiedades nuevas al objeto

const producto ={
    nombreProducto:'portatil DELL',
    precio: 1000,
    cantidadDisponible: true 
}
// console.log('objet.freeze no permite elimar, crear o modificar las propiedades del objeto')
// Object.freeze(producto);//freeze evita que se le agreguen nuevas propiedades al objeto
// //producto.serial =5654654654;
// console.log(Object.isFrozen(producto) + 'isfrozen indica que el producto esta protegido');
// console.log(producto);

console.log('object.seal permite solo modificar las propiedades del objeto')
Object.seal(producto);
producto.precio =4654465;
//delete producto.precio;
console.log(producto);