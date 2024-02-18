console.log('estructuras de control');

const puntaje =555;

if (puntaje >=1000){
    console.log('estas en el nivel amateur del juego');
}else if (puntaje >=500 && puntaje<=999){
    console.log('estas en el nivel profesional del juego');
}else {
    console.log('estas en el nivel aficionado del juegoo');
}

const efectivo =10000;
const totalCarrito2=10001;

if (totalCarrito2>efectivo){
    console.log('lo sentimos su saldo es insuficiente');
}else if (totalCarrito2<=efectivo && efectivo>1000){
    console.log('aun puede seguir llevando productos');
}else{
    console.log('aun no tiene productos');
}

const loggin='victor';

if (loggin ==='ADMINISTRADOR'){
    console.log('bienvenido administrador');
}else if (loggin ==='Victor'){
    console.log('bienvenido desarrollador');
}else{
    console.log('bienvenido invitado');
}

