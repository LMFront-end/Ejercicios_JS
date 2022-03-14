// dime el indice de la gallina

const animales2 = ['🐭', '🐷', '🐸', '🐔', '🐻'];

const indiceAnimal = animales2.findIndex(function(animal2) {
    return animal2 === '🐔'
})

console.log(indiceAnimal);