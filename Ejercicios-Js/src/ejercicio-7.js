/*
/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
*/

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const contarCadena = (cadena = "") => {

        if (!cadena) return console.warn('No ingresaste una cadena de texto');

        if (typeof cadena !== 'string') return console.error('El valor "${cadena}" ingresado, No es una cadena de texto');

        let vocales = 0,
            consonantes = 0;

        cadena = cadena.toLocaleLowerCase();

        for (let letra of cadena) {
            if (/[aeiouAEIOUáéíóúÁÉÍÓÚ]/.test(letra)) vocales++;

            if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
        }

        return console.info({
            cadena,
            vocales,
            consonantes
        });
    }
    /*
    contarCadena();
    contarCadena(3);
    contarCadena('Hola Mundo');
    contarCadena('Te amo novio ficticio');
    */

/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const validarNombre = (nombre = "") => {

    if (!nombre) return console.warn('No ingresaste una cadena de texto');

    if (typeof nombre !== 'string') return console.error('El valor "${nombre}" ingresado, No es una cadena de texto');

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return (expReg) ?
        console.info(`"${nombre}", es un nombre válido`) :
        console.warn(`"${nombre}", no es un nombre válido`);
}

/*
validarNombre();
validarNombre(3);
validarNombre('Lina María');
validarNombre('Marc3la');
*/


/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const validarEmail = (email = "") => {

    if (!email) return console.warn('No ingresaste un email');

    if (typeof email !== 'string') return console.error('El valor "${email}" ingresado, No es una cadena de texto');

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg) ?
        console.info(`"${email}", es un correo válido`) :
        console.warn(`"${email}", no es un correo válido`);
}

validarEmail();
validarEmail(3);
validarEmail('linaguerrero@gmail.com');
validarEmail('holamndo,mot,mot');