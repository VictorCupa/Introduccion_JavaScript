console.log("fecth api")


async function obtenerEmpleados(){

    const urlEmpleados= '/empleados.json'
    // fetch(urlEmpleados)
    // .then(resultado =>{
    //     return resultado.json();
    // })
    // .then(datos =>{
    //     console.log(datos)
    // })

    const resultado = await fetch(urlEmpleados);
    const datos = resultado.json();
    console.log(datos);
}
obtenerEmpleados();