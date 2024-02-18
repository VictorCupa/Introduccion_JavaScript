console.log('arrow function');

//Arrow functions

const sumar =function (num1, num2,num3) {
    console.log(num1 + num2 + num3);
}
sumar(3,3,3);

const sumaNum = (num1, num2, num3) => console.log(num1 + num2 + num3);
 sumaNum(4,3,9);

 const aprendiendo=(programacion, framework) =>console.log(`aprendiendo ${programacion} y ${framework}`); 
 aprendiendo('javascript', 'angular');

 //****************************/

const months =['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const carrito = [
    {nombre:'portatil Dell', precio:10},
    {nombre:'monitor samsung', precio:15},
    {nombre:'teclado genius', precio:7},
    {nombre:'audifonos', precio:12},
    {nombre:'consola videgames', precio:4},
    {nombre:'mouse', precio:12},
    {nombre:'impresora hp', precio:14},
]

//iterar sobre un arreglo

//forEach
// months.forEach(month => {
//     if (month === 'Jan') {
//         console.log('Jan is the first month in the year')
//     }
// });

// const result = months.includes('jun');
// console.log(result);


// Some ideal para iterar sobre arreglo con objetos

let resultado3 = carrito.some(item=>item.nombre ==='impresora hp')

console.log(resultado3)

// .Reduce
resultado3 =carrito.reduce((total,item)=> total+item.precio,0);
console.log(resultado3)

//Filter
resultado3 =carrito.filter(producto =>producto.precio <9)
console.log(resultado3)

resultado3 =carrito.filter(producto =>producto.nombre !=='xbox')
console.log(resultado3);