console.log('*********arrays************');

const numbers = [10,20,30,40,50,60,];

// console.table(numbers);


const meses = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNE'];

// console.table(meses);

// //acceder a los valores de un arreglo

// console.log(meses[4]);
// console.log(numbers[3]);

// console.log(`la variable  meses tiene ${meses.length} meses `);

// //iterar el arreglo con forEach

// meses.forEach(function(mes){
//     console.table(mes);
// });

console.log('**********agregar elementos al arreglo****************');

meses.push('JULIO');//CON PUSH AGREGRO ELEMENTOS AL FINAL DEL ARREGLO
meses.unshift('NOVIEMBRE');//CON UNSHIFT AGREGOR ELEMENTOS AL INICIO DEL ARREGLO
meses.pop();//elimina el ultimo elemento del arreglo
meses.shift();//elimina el primer elemento del arreglo
meses.splice(3,1)//busca primero la posicion del arreglo y la cantidad a eliminar

console.table(meses);

//REST OPERATOR O SPREAD OPERATOR

const nuevoMes=[...meses,'JULIO']; 
console.table (nuevoMes);

const nuevoMes2=['agosto',...meses];
console.table (nuevoMes2);
