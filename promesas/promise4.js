// promise.race ejemplo

// funcion para generar numero aleatorio que se usara en el setTimeOut
const randomNumber = (min, max) => {
    const tiempo = Math.random() * (max - min) + min;
    console.log("Valor calculado de tiempo en randomNumber: ", tiempo)
    return parseInt(tiempo);
}

//1era promesa que devuelve 1 despues de un tiempo aleatorio
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, randomNumber(500, 2000));
});

//2da promesa que devuelve 2 despues de un tiempo aleatorio
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(2) }, randomNumber(500, 2000));
});

//3ra promesa que devuelve 3 despues de un tiempo aleatorio
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(3) }, randomNumber(500, 2000));
});

// procesando todas las promesas, pero la de menos tiempo es la ganadora
Promise.race([promise1, promise2, promise3]).then(response => {
        console.log(response);
});


// Promise.race() es un método que permite ejecutar múltiples promesas simultáneamente y devuelve la primera promesa que se resuelve o se rechaza, sin importar su orden. Aquí tienes un ejemplo de cómo usar Promise.race() en JavaScript: