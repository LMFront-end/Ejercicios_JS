//El segundo método de Array.from
//funciona como un map

let arreglo1 = Array.from({ length: 5 }, (_, i) => i);
console.log(arreglo1); // [0, 1, 2, 3, 4]

// .keys() devuelve un iterador que devolverá
// el indice cada vez que sea llamada por el spread

let arreglo2 = [...Array(5).keys()];
console.log(arreglo2); // [0, 1, 2, 3, 4, 5]

// Similar a la interior pero en lugar de spread,
// usamos Array.from para conseguir lo mismo

let arreglo3 = Array.from(Array(5).keys());
console.log(arreglo3); // [0, 1, 2, 3, 4, 5]

// Rellenamos un Array de 5 posiciones con 0
// y luego mapeamos con su indice

let arreglo4 = Array(5).fill(0).map((_, i) => i);
console.log(arreglo4); //[0, 1, 2, 3, 4 ]