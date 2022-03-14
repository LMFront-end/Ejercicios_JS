const msg = '¡Hey 👋🏽! Soy LinaDev y soy 👩🏽‍💻';

//¿Dónde está el emoji de informático?

let emojiInformatico = msg.indexOf('👩🏽‍💻');
console.log(emojiInformatico);

//Si quieres buscar el indice del último
let ultimoIndice = msg.lastIndexOf('y');
console.log(ultimoIndice);

//¿Empieza con "¡Hey!" el mensaje?
let palabraInicial = msg.startsWith('¡Hey');
console.log(palabraInicial);

//¿Termina con punto el mensaje'
let puntoFinal = msg.endsWith('.');
console.log(puntoFinal);

//Si quieres recibir un booleano, mejor includes
let incluyePalabra = msg.includes('LinaDev');
console.log(incluyePalabra);