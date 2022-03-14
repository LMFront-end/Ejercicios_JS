/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste el número a convertir');

    if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if (base === undefined) return console.warn('No ingresaste la base a convertir');

    if (typeof base !== 'number') return console.error(`El valor "${base}" ingresado, NO es un número`);

    if (base === 2) {
        return console.info(`${numero} base  ${base} = ${parseInt(numero, base)} base 10`)
    } else if (base === 10) {
        return console.info(`${numero} base  ${base} = ${(numero.toString(2))} base 2`);
    } else {
        return console.error('El valor ingresado no es valido');
    }
}

/*
convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(23, 3);
*/

/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn('No ingresaste el monto');

    if (typeof monto !== 'number') return console.error(`El valor "${monto}" ingresado, No es un numero`);

    if (monto === 0) return console.error(`El monto no puede ser 0`);

    if (Math.sign(monto) === -1) return console.error('El monto no puede ser negativo');

    if (typeof descuento !== 'number') return console.error(`El valor "${descuento}" ingresado No es un numero`);

    if (Math.sign(descuento) === -1) return console.error('El descuento no puede ser negativo');

    return console.info(`${monto} - ${descuento}% =  ${monto - ((monto*descuento) / 100)}`);
}

/*
aplicarDescuento();
aplicarDescuento('200');
aplicarDescuento(0);
aplicarDescuento(-3);
aplicarDescuento(1000, 2);
*/


/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const calcularAnios = (fecha = undefined) => {

    if (fecha === undefined) return console.warn('No has ingresado ninguna fecha');

    if (!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha valida');

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();

    //1000 --> milisegundos
    let aniosMS = 1000 * 60 * 60 * 24 * 365;

    let aniosHumanos = Math.floor(hoyMenosFecha / aniosMS);

    return (Math.sign(aniosHumanos) === -1)

    ?
    console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)

    :
    (Math.sign(aniosHumanos) === 1)

    ?
    console.info(`Han pasado ${Math.abs(aniosHumanos)} años desde ${fecha.getFullYear()}`)

    :
    console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios();
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1998, 9, 14));
calcularAnios(new Date(1966, 7, 1));