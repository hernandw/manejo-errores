try {
    // Código con error de sintaxis
    console.log("Inicio del bloque try");
    const resultado = 10 / b ; // Variable no definida
    console.log("Fin del bloque try");
} 
catch (e) {
    // Captura cualquier error que ocurra y muestra sus propiedades
    console.log("Error capturado:");
    console.log("Nombre del error:", e.name);
    console.log("Mensaje de error:", e.message);
}
