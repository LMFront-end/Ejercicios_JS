const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach()

const rest01 = numeros.forEach(x => x * 5);
console.log(rest01);

//map()

const rest02 = numeros.map(x => x * 5);
console.log(rest02);

/* Ejemplos de forEach */

const customers = [{
        name: 'Lina Maria',
        age: 22,
        occupation: 'programmer',
        end: 1998
    },

    {
        name: 'Mateo',
        age: 25,
        occupation: 'Scientist',
        end: 1996
    },

    {
        name: 'Santiago',
        age: 28,
        occupation: 'finance',
        end: 1993
    },

    {
        name: 'Felipe',
        age: 20,
        occupation: 'programmer',
        end: 1999
    },

    {
        name: 'Camila',
        age: 22,
        occupation: 'programmer',
        end: 1998
    },

    {
        name: 'Jose',
        age: 40,
        occupation: 'programmer',
        end: 1981
    },

    {
        name: 'Teodoro',
        age: 22,
        occupation: 'programmer',
        end: 1998
    },

    {
        name: 'Juan',
        age: 18,
        occupation: 'programmer',
        end: 2003
    },

    {
        name: 'Camilo',
        age: 18,
        occupation: 'programmer',
        end: 2003
    },

    {
        name: 'Juan',
        age: 17,
        occupation: 'programmer',
        end: 2004
    },
]

let results = [];
const clients = customers.forEach((customer, index) => {
    if (customer.age > 20) {
        customer.index = index;
        results.push(customer);
    }
});

console.log(results);