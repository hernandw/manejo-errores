function showError() {
    return new Promise((resolve, reject) => {
        reject(new Error("Ha ocurrido un problema!"));
    })
}

// procesar la promesa
showError()
.then(resolve =>{
    console.log(resolve)
})
.catch(err => {
    console.log(err.name + ":  " + err.message)
})