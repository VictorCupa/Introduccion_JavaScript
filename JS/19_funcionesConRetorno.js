console.log('***funciones con retorno***');

function  operaciones(n1, n2,n3,n4) {
    return (((n1-n2)*n3)-n4)
}
const resultado =operaciones(10,20,3,456);
console.log(resultado);


let totalCarrito =0;

function agregarCarrito(precio){
    return totalCarrito += precio;
}

function calcularImpuesto(totalCarrito){
    return 1.19*totalCarrito
}
totalCarrito=agregarCarrito(100);
totalCarrito=agregarCarrito(200);
totalCarrito=agregarCarrito(300);

console.log(`el total de la compra sin IVA  es de ${totalCarrito}`);

const totalAPagar=calcularImpuesto(totalCarrito); 
console.log(`el total de la compra con IVA  es de ${totalAPagar}`);