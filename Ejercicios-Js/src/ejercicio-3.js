/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertirCadena = (cadena = "") =>
    (!cadena) ?
    console.warn('No ingresaste una cadena de texto') :
    console.info(cadena.split("").reverse().join(""));

/*
invertirCadena();
invertirCadena('Hola Mundo');
*/


/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const textoCadena = (cadena = "", texto = "") => {

    if (!cadena) return console.warn('No ingresaste un texto largo');

    if (!texto) return console.warn('No ingresaste la palabra evaluar');

    let i = 0;
    let contador = 0;

    while (i !== -1) {
        i = cadena.indexOf(texto, i);

        if (i !== -1) {
            i++
            contador++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces `)
}

/*
textoCadena();
textoCadena("", "mundo");
textoCadena('Hola mundo, adios mundo, mundo', "mundo");
*/


/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const palindromo = (palabra = "") => {
    if (!palabra) return console.warn('no ingresaste palabra o frase');

    palabra = palabra.toLocaleLowerCase();

    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves) ?
        console.info(`Si es palindromo: \n palabra original ${palabra} \n Palabra alReves ${alReves}`) :
        console.info(`No es palindromo: \n palabra original ${palabra} \n Palabra alReves ${alReves}`)
}

/*
palindromo();
palindromo('Hola mundo');
palindromo('Salas');
*/


/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto) ? console.warn('No ingresaste un texto') :
    (!patron) ? console.warn('No ingresaste un patrón') : console.info(texto.replace(new RegExp(patron, 'ig'), ""));


eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");