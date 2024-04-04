// promise.all son ejecucion de varias promesas
const promise1 = 0; // probar con 1 y 0
const promise2 = Promise.resolve(2);

const promise3 = new Promise((resolve, reject) => {
    if (promise1 == 1) {
        setTimeout(() => {
            resolve(3)
        }, 1000);
    } else
    {
        reject("Valor de promise: "+promise1+" No es igual a 1")
    }
});

// se procesan varias promesas con manejo que falle alguna
Promise.all([promise1, promise2, promise3]).then(
    response => {
    console.log(response); // [1, 2, 3] responde un arreglo
})
.catch(err => console.error("Error: ",err))