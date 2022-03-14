const algunError = ['✅', '✅', '❎', '❎', '❎'];

function error(elemento, index) {
    return elemento === '❎';
}

console.log(algunError.some(error));