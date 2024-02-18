console.log('switch');

const metodoPago ='TRANSFERENCIA';

switch (metodoPago) {

    case 'TARJETA':
        console.log('haz seleccionado el medio de pago tarjeta');
        break;
    case 'DEBITO':
        console.log('haz seleccionado el medio de pago tarjeta');
        break;
    case 'CHEQUE':
        console.log('haz seleccionado el medio de pago cheque');
        break;
    case 'BONO':
        console.log('haz seleccionado el medio de pago bono');
        break;
    case'TRANSFERENCIA':
        console.log('el medio de pago seleccionado no es valido');
        break;
        default:
            console.log('aun no has seleccionado un metodo de pago')
            break;
}
