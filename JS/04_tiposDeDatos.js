console.log('*****tipos de datos en js*******');

const producto='portatil DELL de 16"';
const producto2=String('monitor de 22"');//constructor;
const producto3=new String('portatil 3');//objeto

console.log(producto.length);
console.log(producto2.length);
console.log(producto3.length);

//para saber si una palabra existe dentro de una cadena de texto usamos indexof

let message ='dentro del curso de javascript estoy aprendiendo tipos de datos, metodos y operaciones con los tipos de datos strings para aprender, en este caso usararemos IndexOf para buscar una palabra dentro de este texto'

console.log(message.indexOf('aprendiendo'));
console.log(message.indexOf('texto'));

//Include retorna falso o verdadero para indicar si existe algo dentro de lo que estamos colocando en este caso texto.

console.log(message.includes('aprendiendo'));
console.log(message.includes('victor'));// para este caso retorna false para indicar que la palabra victor no existe dentro del texto.
