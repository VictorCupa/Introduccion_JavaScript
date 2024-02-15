console.log('************ array Methods *******************');

const months =['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const carrito = [
    {nombre:'portatil Dell', precio:10},
    {nombre:'monitor samsung', precio:5},
    {nombre:'teclado genius', precio:7},
    {nombre:'audifonos', precio:12},
    {nombre:'consola videgames', precio:4},
    {nombre:'mouse', precio:12},
    {nombre:'impresora hp', precio:14},
]

//iterar sobre un arreglo

//forEach
months.forEach(function(month) {
    if (month === 'Jan') {
        console.log('Jan is the first month in the year')
}else if (month !== 'Jan') {
    console.log('is other month in the year')
}
});

const result = months.includes('jun');
console.log(result);


// Some ideal para iterar sobre arreglo con objetos

let resultado3 = carrito.some(function(item){
    return item.nombre ==='impresora hp'
});
console.log(resultado3)

// .Reduce
resultado3 =carrito.reduce(function(total,item){
    return total+item.precio
},0);
console.log(resultado3)
//Filter
resultado3 =carrito.filter(function(producto){
    return producto.precio <9
});
console.log(resultado3)
resultado3 =carrito.filter(function(producto){
    return producto.nombre !=='xbox'
});
console.log(resultado3);