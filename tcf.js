// viendo el stack
function trace() {
    try {
        throw new Error('miErrorpersonalizado');
    }
    catch (e) {
        console.log(e.stack);
    }
}

function b() {
    trace();
}

function a() {
    b();
}

a()

