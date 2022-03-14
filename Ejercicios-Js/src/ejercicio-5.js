/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const numeroPrimo = (numero = undefined) => {

    if (numero === undefined) return console.warn('No ingresaste un número');

    if (typeof numero !== 'number') return console.warn(`El valor "${numero}" ingresado, NO es un número`);

    if (numero === 0) return console.error('El número no puede ser 0');

    if (numero === 1) return console.error('El número no puede ser 1');

    if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo');

    let divisible = false;

    for (let i = 2; i < numero; i++) {

        //obtener el residuo
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }

    return (divisible)

    ?
    console.info(`El numero ${numero} no es primo`): console.info(`El numero ${numero} es primo`);
}

/*
numeroPrimo();
numeroPrimo("434");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(-1);
numeroPrimo(15);
numeroPrimo(7);
*/


/*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const numeroParImpar = (numero = undefined) => {

    if (numero === undefined) return console.warn('No ingresaste un número');

    if (typeof numero !== 'number') return console.warn(`El valor "${numero}" ingresado, NO es un número`);

    return ((numero % 2) === 0) ? console.info(`El numero ${numero} \n es PAR`) :
        console.info(`El numero ${numero} \n no es PAR`);
}

/*
numeroParImpar();
numeroParImpar('23');
numeroParImpar(24);
numeroParImpar(25);
*/

/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertidorGrados = (grados = undefined, unidad = undefined) => {

    if (grados === undefined) return console.warn('No ingresaste ningun valor a convertir');

    if (typeof grados !== 'number') return console.error(`El valor ${grados} ingresado, No es un número`);

    if (unidad === undefined) return console.warn('No ingresaste ningun valor de la unidad');

    if (typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, No es una cadena de texto`);

    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido');

    if (unidad === 'C') {
        return console.info(`${grados}°C = ${Math.round(grados*(9/5)) + 32}°F`);

    } else if (unidad === 'F') {
        return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C`);
    } else {
        return console.error('El tipo de grads a convertir No es válido');
    }

    //console.info('Funciono');
}

convertidorGrados();
convertidorGrados("2");
convertidorGrados(2);
convertidorGrados(2, true);
convertidorGrados(2, "Hola");
convertidorGrados(100, "C");
convertidorGrados(32, "F");