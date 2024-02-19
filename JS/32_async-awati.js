console.log('*** async await ***');

function descargarClientes(){
    return new Promise( resolve =>{
        console.log('descargando clientes ....');

        setTimeout(()=>{
            resolve('archivo de clientes descargados');
        }, 5000);
    });
}

function descargarPedidos(){
    return new Promise( resolve =>{
        console.log('descargando pedidos ....');

        setTimeout(()=>{
            resolve('archivo de pedidos descargados');
        }, 3000);
    });
}

async function app(){
    try {
        // const clientes = await descargarClientes();
        // const pedidos = await descargarPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const descargas =await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(descargas[0]);
        console.log(descargas[1]);

    }catch(e){
        console.log(e);
    }
}
app();