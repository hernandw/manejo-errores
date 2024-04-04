// Creando excepcion personalizada con throw
try {
    throw  new Error ("Ups! Ha ocurrido un error");

} catch (e) {
    //console.log(e)
    console.log(e.name + ": " + e.message);
}