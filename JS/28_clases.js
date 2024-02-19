console.log('*****clases en javascript*****');

// clases en javascript

class Producto{
    constructor(nombre, precio, color){
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    formatearProducto(){
        return `El producto ${this.nombre},tiene un precio de : ${this.precio}`;
    }

    formatearPrecio(){
        return`el precio es de:${this.precio}`;
    }
}
const producto2= new Producto('portail dell',5646,'gris');
const producto3= new Producto('portail lenovo',56456,'blanco');

console.log(producto2);
console.log(producto2.formatearProducto())
console.log(producto2.formatearPrecio());
console.log(producto3);

//Herencia en los objetos
class Libro extends Producto {
    constructor(nombre,precio, color,codigo){
        super(nombre, precio);
        this.codigo=codigo;
    }
    formatearProducto(){
        return `${super.formatearProducto()} tiene un codigo: ${this.codigo}`;
    }
}
const libro1 =new Libro('programacion',654654,100101);
console.log(libro1);
console.log(libro1.formatearProducto());

