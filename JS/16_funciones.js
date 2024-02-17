console.log('**********Funciones en Javascript**********');

// declarcion de la funcion

function sumar() {
    console.log(10+10);
}
sumar();

//expresion de la funcion

const multiplicar = function(){
    console.log(10*10);
}
multiplicar();

//funciones IIFE se mandan llamar ellas mismas

(function(){
    console.log('esta es una funcion IIFE');
})();