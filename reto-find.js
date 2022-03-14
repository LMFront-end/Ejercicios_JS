// Encuentra y devuelve la gallina

const animales = ['🐭', '🐷', '🐸', '🐔', '🐻'];

const encontrarAnimal = animales.find(function(animal) {
    return animal === '🐔';
})

console.log(encontrarAnimal);