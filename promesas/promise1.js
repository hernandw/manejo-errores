// manejando una promesa con que hacer al tener una respuesta asociada al resolve
// y un error asociado al reject
const promise = new Promise((resolve, reject) => {
    const value = false; // varia true/false
    value ? resolve('Exito') : reject('Rechazado')
})
promise.then(resp => console.log("Respuesta si la promesa devuelve resolve: ",resp))
       .catch(err => console.error("Respuesta si la promesa devuelve reject: ",err))