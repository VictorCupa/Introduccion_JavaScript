console.log('ejercicio de logica')

/* crear un funcion calcudara con las operaciones basica*/

// function calculadora(a,b,operador){
//     switch(operador){
//         case '+':
//             console.log(a + b);
//             break;
//         case '-':
//             console.log(a - b);
//             break;
//         case '*':
//             console.log(a * b);
//             break;
//         case '/':
//             console.log(a /b);
//             break;
//         case '%':
//             console.log(a % b);
//             break;

//             default:
//                 console.log('coloque una operacion valida ejemplo: + - * o /')
//                 break;

//     }
// }
// calculadora(62,62,'/')

// //2 ejercicio

// let nombre =prompt('coloca tu nombre');
// let añoNacimiento= prompt('coloca tu año de nacimiento');
// let año= 2024;
// let edad=2024-parseInt(añoNacimiento,10); //
// alert(`hola ${nombre} tienes ${edad} años actualmente y el año que viene tendras ${(parseInt(edad,10)) +1} años de edad`);



// let area= prompt('ingresa el area que quieres calcular: cuadrado, triangulo o cirulo');
// switch(area){
//     case 'cuadrado':
//          base= prompt('ingresa cuanto mide la base');
//          haltura=prompt('ingresa la altura');
//          areaCuadrado= parseInt(base)*parseInt(haltura);
//          alert(`el area del cuadrado es de ${areaCuadrado} cm`)
//        break;

//     case 'triangulo':
//         base= prompt('ingresa cuanto mide la base');
//          haltura=prompt('ingresa la altura');
//          areatriangulo= (parseInt(base)*parseInt(haltura))/2;
//          alert(`el area del cuadrado es de ${areatriangulo} cm`)
//         break;

//     case 'circulo':
//         radio= prompt('ingresa el radio del circulo');
//         areaCirculo= Math.PI*Math.pow(parseInt(radio),2);
//         alert(`el area del circulo es de ${areaCirculo} cm`);
//         break;
//        default:
//         alert('opcion incorrecta');
//         break;
// }
//valida si el numero es par 
// let num= prompt('ingrese un numero no mayor o igual a 10');
// num= parseInt(num);
// for (let i=1; i<=num;i++){
//     if(i%2==0){
//         console.log(`${i} par`)
//     }else{
//         console.log(`${i} impar`)
//     }
// }

//ejercicios  

// escribe tu respuesta acá

/*código de 
una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj)" o "eoZiugBf&g9". De lo contrario debe retornar false.*/

// function contrasenaValida(){
//     const pedirUsuario=prompt('ingrese su usuario');
//     const password=prompt('ingrese su contraseña');
//     if (password=== '2Fj(jjbFsuj")'){
//         alert(`Bienvenido admin ${pedirUsuario}`);
//     } else if (password === 'eoZiugBf&g9'){
//         alert(`Bienvenido invitado ${pedirUsuario}`);
//     } else if (password === 'hola'){
//         alert('lo siento la contraseña o usuario no son correctos')
//     }else {
//         alert('lo siento datos invalidos intente nuevamente')
//     }
// }contrasenaValida();

//2  CALCULAR IMPUESTOS
/*
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.*/

// function calcularImpuestos(){
//     const nombre =prompt('escriba su nombre');
//     const edad= prompt('igrese su edad');
//     const salario = prompt('escriba su salario');
//     if (edad>='18'&& salario>=1000){
//         alert(`Hola ${nombre} los impuestos que debes pagar para este año es de: ${parseInt(salario)*40}`);
//     }else if (edad>='18'&& salario<1000 &&salario>1){
//         alert(`Hola ${nombre} tu rango de salario esta por fuera de pagar impuesto`);
//     }else{
//         if (edad<'18'&& salario>=1000)
//         alert(`hola ${nombre} aun eres menor de edad y no estas obligado a pagar impuestos aun aun que tu salario sea ${salario}`)
//     }
// }calcularImpuestos();

// 3 IMC (ïndice de masa corporal)

//  function  calcularImc (){
//         const nombre= prompt('Ingres tu nombre');
//         const peso= parseFloat(prompt('ingres tu peso en kilos'));
//         const estatura= parseFloat(prompt('ingresa tu estatura en metros'));
//         const resultImc=Math.round(peso/Math.pow(estatura, 2));
//         let clasificacion;
//         switch(true){
//             case resultImc<18.5:
//                 alert(clasificacion=(`hola ${nombre}, de acuerdo a la informacion ingresada tu IMC es ${resultImc}, lo cual indica que estas bajo en peso`));
//                 break;
//             case resultImc >=18.5 && resultImc<=24.9:
//                 alert(clasificacion=(`hola ${nombre}, de acuerdo a la informacion ingresada tu IMC es ${resultImc}, lo cual indica que estas normal de peso`));
//             break;
//             case resultImc >=25 && resultImc< 29.9:
//                 alert(clasificacion=(`hola ${nombre}, de acuerdo a la informacion ingresada tu IMC es: ${resultImc}, lo cual indica que estas en sobrepeso`));
//             break;
//             case resultImc >=30 :
//                 alert(clasificacion=(`hola ${nombre}, de acuerdo a la informacion ingresada tu IMC es: ${resultImc}, lo cual indica que tienes obecidad`));
//             break;

//             default :
//             alert('aun no has ingresado la informacion necesaria para poder calcular tu imc');
//             break;
//         }
//  }calcularImc();

// 4. Imprimir un arreglo

function imprimirArreglo(arrayText) {
    const 
}
let arrayUser=[];
