// Creando excepcion personalizada co throw
const showError = () => {
    try {
        throw {respuesta:"Ha ocurrido un error",
               status:false
              } ; //crea la excepcion y la captura catch (un objeto)
    }
    catch (e) {
        console.log("Respuesta: ",e)
    }
}
showError();