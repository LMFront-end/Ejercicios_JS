/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ordenarArreglo = (arr = undefined) => {

    if (arr === undefined) return console.warn('No ingresaste un arreglo de números');

    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

    if (arr.length === 0) return console.error('El arreglo está vacio');

    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, NO es un número`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    });
}

/* ordenarArreglo();
ordenarArreglo(true);
ordenarArreglo([]);
ordenarArreglo([5, 6, 7, 8, 9]);
ordenarArreglo([100, 20, 40, 6]);
 */



/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const eliminarDuplicado = (arr = undefined) => {

    if (arr === undefined) return console.warn('No ingresaste un arreglo de números');

    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

    if (arr.length === 0) return console.error('El arreglo está vacio');

    return console.info({
        newArray: arr.filter((item, index) => {
            return arr.indexOf(item) === index
        })
    });
}

/* eliminarDuplicado();
eliminarDuplicado(3);
eliminarDuplicado(false);
eliminarDuplicado([]);
eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true]); */


/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedioArray = (arr = undefined) => {

    if (arr === undefined) return console.warn('No ingresaste un arreglo de números');

    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

    if (arr.length === 0) return console.error('El arreglo está vacio');

    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, NO es un número`);
    }
}