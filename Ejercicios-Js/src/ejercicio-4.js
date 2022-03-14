/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const NumeroAleatorio = () => console.info(Math.round(Math.random() * 100) + 500);

//NumeroAleatorio();

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const capicuaNum = (num = 0) => {
    if (!num) return console.warn('No ingresaste un número');

    if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado, NO es un número`);

    num = num.toString();

    let alRevez = num.split('').reverse().join('');

    return (num === alRevez) ?
        console.info(`Sí es capicua \n Numero original ${num} \n Numero al revés ${alRevez}`) :
        console.info(`No es capicua \n Numero original ${num} \n Numero al revés ${alRevez}`)
}

/*
capicuaNum();
capicuaNum('19');
capicuaNum([]);
capicuaNum(2000);
capicuaNum(2002);
*/

/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

// No se puede sacar el factorial de un negativo y tampoco de 0.

const numFactorial = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un número');

    if (typeof numero !== 'number') return console.warn(`El valor "${numero}" ingresado, NO es un número`);

    if (numero === 0) return console.error('El número no puede ser 0');

    if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo');

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}

numFactorial();
numFactorial("4");
numFactorial([1, 2, 3]);
numFactorial(0);
numFactorial(-5);
numFactorial(4);
numFactorial(5);