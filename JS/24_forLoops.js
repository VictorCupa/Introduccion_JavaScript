console.log('loops')

//for

for(let i = 1; i <= 5; i++){
    if(i %2===0){
        console.table(`${i} es par`)
    }
    else {
        console.table(`${i} es impar`)
    }
}

const carrito = [
    {nombre:'portatil Dell', precio:10},
    {nombre:'monitor samsung', precio:15},
    {nombre:'teclado genius', precio:7},
    {nombre:'audifonos', precio:12},
    {nombre:'consola videgames', precio:4},
    {nombre:'mouse', precio:12},
    {nombre:'impresora hp', precio:14},
]
for (let i=0; i<=carrito.length; i++) {
    console.log(carrito[i]);
}

console.log('*****while loop**********');

let i=0;

while(i <=carrito.length){
     console.log(carrito[i])


     i++
}

console.log('*********do while*********')
let x=0;
do{
    console.log(carrito[x])
    x++;
}while(x < carrito.length)