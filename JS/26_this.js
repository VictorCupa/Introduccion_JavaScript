console.log('*****Thi*****');

const reservacion ={
    nombre: 'victor',
    apellido:'cupa',
    totalReserva: 54646,
    pagado: false,
    ticket:function(){
        console.log(`el cliente ${this.nombre} ${this.epellido} debe pagar por la reserva un total de: ${this.totalReserva}`)
    }
}
reservacion.ticket();

