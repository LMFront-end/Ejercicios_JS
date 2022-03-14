let nombre = "Lina";
let monto = 12.50;

function doble(x) {
    return x * 2;
}

//funcion anonima

let triple = function(x) {
    return x + 3;
}


//las funciones pueden utilizarse como entrada a otras funciones

let customers = [
    { id: 1, name: 'Mateo', status: 'active' },
    { id: 2, name: 'Santiago', status: 'canceled' },
    { id: 3, name: 'Pablo', status: 'inactive' },
    { id: 4, name: 'Lina', status: 'prospect' },
    { id: 5, name: 'Camila', status: 'active' },
    { id: 6, name: 'Sebastian', status: 'active' },
    { id: 7, name: 'Felipe', status: 'prospect' },
];


//El metodo filter acepta como parametro otra funcion
let activeCustomers = customers.filter(function(customers) {
    return customers.status === 'active';
});

console.log(activeCustomers);

//las funciones pueden utilizarse como salida a otras funciones

//las funciones pueden retornar a otras funciones
function crearCalificador(adjetivo) {
    return function(sustantivo) {
        return `${adjetivo} ${sustantivo}`;
    }
}

let calificarComoSuper = crearCalificador('super');

let amigo = calificarComoSuper('amigo');
console.log(amigo);

let pianista = calificarComoSuper('pianista');
console.log(pianista);

//funciones de orden superior --> Es una funcion que toma una funcion como parametro o retorna una funcion.

// filter --> higher order function

//--> composicion: combinar varias funciones pequeñas para crear una nueva funcion

const text = 'Aprende a programar aplicaciones web';

const split = function(str) {
    return str.split(' ');
}

//el codigo se puede simplificar mas con una funcion flecha

/*
 const split = str => str.split(' ');
*/

const count = function(arr) {
    return arr.length;
}

/*
const count = arr => arr.length;
*/

const countWords = function(str) {
    return count(split(str));
    //lo que retorna una funcion es la entrada de la siguiente.
}

/*
const countWords = str => count(split(str));
*/

const result = countWords(text);
console.log(result);


//ejemplo 2.

//(x+3)*10

const sumNumbers = function(a, b) {
    return a + b;
}

const multiplyByTen = function(c) {
    return c * 10;
}

const x = 4;

const result1 = multiplyByTen(sumNumbers(3, x));
console.log(result1);


//Array.prototype.map()

/*
1. Proposito --> Es recibir una version modificada de un array.
*/

const projects = [{
            id: 11,
            name: 'French Bakery Logo Design',
            created_at: '2019-01-01'
        },

        {
            id: 35,
            name: 'Lion Contruction Logo Design',
            created_at: '2019-01-12'
        },

        {
            id: 48,
            name: 'Mobile App for Electronics Campany',
            created_at: '2019-01-17'
        },

        {
            id: 54,
            name: 'Improve Lion Website Performance',
            created_at: '2019-01-23'
        }

    ] // [11, 35, 48, 54]

const projectsId = projects.map(function(p) {
    return p.id;
});
console.log(projectsId);

console.log();

const val = [1, 2, 3, 4]
    //[2,4,6,8]

const newNumber = val.map(function(n) {
    return n * 2
});
console.log(newNumber);

console.log();

const catalog = [{
        id: 23,
        name: 'Red notebook',
        price: 2.25
    },

    {
        id: 24,
        name: 'Black pens',
        price: 1.00
    },

    {
        id: 25,
        name: 'blue pens',
        price: 1.50
    },

    {
        id: 26,
        name: 'calculator',
        price: 12.50
    }

];

const catalogWidthTax = catalog.map(function(c) {

    return {
        id: c.id,
        name: c.name,
        price: c.price,
        tax: c.price * .10
    }
});

console.log(catalogWidthTax);

/*
Puntos a tener en cuenta cuando se trabaja con map:

1- Map no modifica el array original. map retorna un array nuevo.
2- Cuandoo utilizamos map nos devuelve la misma cantidad de elementos del array original.
3- Se concidera map una funcion de orden superior ya que toma una funcion como parametro.
*/

console.log();

/* METODO FILTER */

const numeros = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const positivos = numeros.filter(function(numero) {
    return numero >= 0;
});
console.log(positivos);

const negativos = numeros.filter(function(numero) {
    return numero < 0;
})
console.log(negativos);

let restaurantes = [{
        nombre: 'De mi rancho a tu cocina',
        puntaje: 5,
        abierto: true
    },

    {
        nombre: 'Hamburgesas Lina',
        puntaje: 4,
        abierto: false
    },

    {
        nombre: 'tocineta y más',
        puntaje: 3.5,
        abierto: true
    },

    {
        nombre: 'Asadoro don sazon',
        puntaje: 5,
        abierto: true
    },

];

let abiertos = restaurantes.filter(function(restaurante) {
    return restaurante.abierto;
});

console.log(abiertos);

let puntajes = restaurantes.filter(function(puntos) {
    return puntos.puntaje >= 4;
});
console.log(puntajes);

let nombresRestaurantes = restaurantes.filter(function(nombres) {
    return nombres.nombre;
});
console.log(nombresRestaurantes);