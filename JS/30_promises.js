console.log('****promises******');


const usuarioAutenticado = new Promise((resolve, reject) => {

    const auth=true;

    if (auth) {
        resolve('usuario autenticado');//el promise se cumple
    } else{
        reject('no se pudo iniciar sesion');// el promise no se cumple
    }
});

usuarioAutenticado
.then(function(resultado){
    console.log(resultado);
})
.catch(function(e){
    console.log(e);
});

//En los promises existen 3 valores 
//Pending: aun no se ha cumplido la promise
//Fulfilled: promise ejecutada
//Rejected: no se ha cumplido el promise