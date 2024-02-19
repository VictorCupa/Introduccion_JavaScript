console.log('*****clases en javascript*****');

// clases en javascript

class Producto{
    constructor(nombre, precio, color){
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    formatearProducto(){
        return `El producto ${producto.nombre},tiene un precio de : ${producto.precio}`;
    }

    formatearPrecio(){
        return`el precio es de:${this.precio}`;
    }
}
const producto2= new Producto('portail dell',5646,'gris');
const producto3= new Producto('portail lenovo',56456,'blanco');

console.log(producto2);
console.log(producto2.formatearPrecio());
console.log(producto3);

