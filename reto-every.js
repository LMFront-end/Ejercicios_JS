//¿Todo está ok?

const checkOk = ['✅', '✅', '❎', '❎', '❎'];

function todoOk(elemento, index) {
    checkOk.index = index;
    return elemento === '✅';
}

console.log(checkOk.every(todoOk));