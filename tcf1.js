
// Función que lanza una excepción personalizada
function lanzarExcepcion() {
    throw new Error ("¡Se ha producido un error personalizado!");
}

// Bloque try/catch/finally para manejar la excepción
try {

    console.log("Inicio del bloque try");
    lanzarExcepcion();
    console.log("Fin del bloque try"); // línea no se ejecutará debido a la excepción

} catch (error) {

    console.log("Error capturado:", error.message);

} finally {

    console.log("Bloque finally: Esto siempre se ejecuta");

}
