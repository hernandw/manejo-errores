// simulando funcion asincrona con promesa
function operacionAsincrona1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, Math.random() * 1000); // Simulamos operación asíncrona que toma un tiempo aleatorio
    });
}

// simulando funcion asincrona con promesa
function operacionAsincrona2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, Math.random() * 1000); // Simulamos operación asíncrona que toma un tiempo aleatorio
    });
}

// simulando funcion asincrona con promesa
function operacionAsincrona3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(3);
        }, Math.random() * 1000); // Simulamos operación asíncrona que toma un tiempo aleatorio
    });
}

// funcion asincrona con async/await
async function main() {
    // Ejecutamos las tres operaciones asíncronas al mismo tiempo
    const resultados = await Promise.all
    ([operacionAsincrona1(), operacionAsincrona2(), operacionAsincrona3()]);

    // Cuando todas las promesas se resuelvan, podemos trabajar con los resultados
    // con el await espera que la promesa se resuelva
    console.log("Resultados:", resultados); // Output: [1, 2, 3]
}

main();
