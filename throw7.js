try {
    // Código con un error de tiempo de ejecución
    console.log("Inicio del bloque try");
    const x = 3;
    console.log(x.includes(4))
    console.log("Fin del bloque try");
} catch (error) {
    // Captura cualquier error de tiempo de ejecución que ocurra y muestra algunas propiedades
    console.log("Error capturado:");
    console.log("Nombre del error:", error.name);
    console.log("Mensaje de error:", error.message);
}
