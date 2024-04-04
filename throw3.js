// Manejando excepciones del lenguaje
const showError = () => {
    try {
        let a = []; 
        a.length = a.length - 1; // dara un numero negativo
    }
    catch (e) {
        
        console.log(e)
        e.name = "Error de rango"
        e.message = "Invalida longitud de array menor que 0"
        console.log(e.name + ": " + e.message);
    }
}
showError();