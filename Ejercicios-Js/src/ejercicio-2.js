/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (texto = "", veces = undefined) => {

    //validaciones 
    if (!texto) return console.warn('No ingresaste un texto');

    if (veces === undefined) return console.warn('No ingresaste el número de veces a repetir el texto');

    if (veces === 0) return console.error('El número de veces no puede ser 0');

    if (Math.sign(veces) === -1) return console.error('El número de veces no puede ser negativo')

    for (let i = 1; i <= veces; i++) {
        console.info(`${texto}, ${i}`);
    }
}

//comprobaciones

repetirTexto("Hola Mundo", 3);
repetirTexto("", 3);
repetirTexto("Hola Mundo", 0);
repetirTexto("Hola Mundo", -3);