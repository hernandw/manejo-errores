// Función para manejar errores globales
function manejarError(mensaje, url, linea, columna, error) {
    console.log("Se ha producido un error:");
    console.log("Mensaje:", mensaje);
    console.log("URL:", url);
    console.log("Línea:", linea);
    console.log("Columna:", columna);
    console.log("Error:", error);
    
    // Devuelve true para evitar que el navegador muestre el error por defecto
    return true;
}

// Configurar el manejador de errores global, el evento ejecute nuestra funcion
window.onerror = manejarError;

// Causar un error (division por algo no definido)
console.log(10/b);
