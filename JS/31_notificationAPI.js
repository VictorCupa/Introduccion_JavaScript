console.log('****creando una notificación con notificacion API');

const boton=document.querySelector('#boton');
boton.addEventListener('click',() =>{
Notification.requestPermission()
    .then(resultado =>console.log(`resultado: ${resultado}`));
});

if (Notification.permission === 'granted'){
    new Notification('Esta es una nueva notificación',{
        icon:'/img/logoVcupaAnimado.gif',
        body:'victor cupa  desarrollador web  te saluda'
    })
}