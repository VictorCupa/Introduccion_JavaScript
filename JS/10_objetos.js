console.log('***********Trabajar con objetos en javaScript***************');

const producto ={
    nombreProducto:'portatil DELL',
    precio: 1000,
    cantidadDisponible: true 
}

//console.log(producto.nombreProducto);//accedo a la propiedad nombre producto del objeto

//Modificar las propiedades de un objeto
//agregar una propiedad al objeto

producto.serial =6556465465;

console.log(producto);

//eliminar una propiedad al objeto

delete producto. cantidadDisponible;

