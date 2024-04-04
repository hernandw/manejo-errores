// Creando excepcion personalizada con throw
const showError = () => {
    try {
        throw 'Ha ocurrido un error'; //crea la excepcion y la captura catch (un string)
    }
    catch (e) {
        console.log("Respuesta: ",e)
    }
}
showError();