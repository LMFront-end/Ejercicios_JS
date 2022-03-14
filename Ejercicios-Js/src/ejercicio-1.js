/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/
function contarCaracteres(texto) {
    return texto.length;
}

let caracteres = contarCaracteres('Hola mundo');

console.log(caracteres);

/*
function contarCaracteres(cadena = "") {
    if (!cadena){
        console.warn('No ingresaste ninguna cadena');
    }else{
        console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}

//solucion en una linea de codigo
--> Funcion expresada

const contarCaracteres = (cadena = "") => (!cadena)
    ? console.warn('No ingresaste ninguna cadena') 
    : console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres('Hola Mundo');

*/

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function cortarCaracteres(texto) {
    return texto.slice(0, 5)
}

let caracter = cortarCaracteres('Hola mundo');
console.log(caracter);

/*
const recortarTexto = (cadena = "", longitud = undefined) => 
(!cadena)
    ? console.warn('No ingresaste una cadena de texto')
    :console.info(cadena.slice(0, longitud));


//concatenar otro operador ternario

const recortarTexto = (cadena = "", longitud = undefined) => 
(!cadena)
    ? console.warn('No ingresaste una cadena de texto')
    :(longitud === undefined)
        ? console.warn('No ingresaste la longitud para recortar el texto')
        : console.info(cadena.Slice(0, longitud));

recortarTexto('Hola Mundo', 4);
recortarTexto();
recortarTexto('Hola Mundo');
*/

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
*/

const cadenaAArreglo = (cadena = "", separador = undefined) =>
    (!cadena) ?
    console.warn('No ingresaste una cadena de texto') :
    (separador === undefined) ?
    console.warn('No ingresaste el caracter separador') :
    console.info(cadena.split(separador));


cadenaAArreglo('Qui eiusmod labore voluptate sit ea eiusmod.', '');

cadenaAArreglo();
cadenaAArreglo('Hola Mundo');
cadenaAArreglo('', '');