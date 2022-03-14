// Filtra la comida carnivora

const comidas = ['🥩', '🧀', '🥦'];

const filtrar = comidas.filter(function(comida) {
    return comida !== '🥩';
})

console.log(filtrar);