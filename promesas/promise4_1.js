function operacionAsincrona1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, Math.random() * 1000); // Simulamos operación asíncrona que toma un tiempo aleatorio
    });
}

function operacionAsincrona2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, Math.random() * 1000); // Simulamos operación asíncrona que toma un tiempo aleatorio
    });
}

function operacionAsincrona3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Operación 3 fallida");
        }, Math.random() * 1000); // Simulamos una operación asíncrona que falla
    });
}

async function main() {
    // Ejecutamos las tres operaciones asíncronas al mismo tiempo
    const resultado = await Promise.race(
        [operacionAsincrona1(), operacionAsincrona2(), operacionAsincrona3()])
        .catch(err => err)    

    // Cuando se resuelva o rechace la primera promesa, podemos trabajar con el resultado
    console.log("Resultado:", resultado); // 1, 2 o el mensaje de error "Operación 3 fallida"
}

main();
