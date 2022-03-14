import Persona from './Persona.js';
import Empleado from './Empleado.js';
import Cliente from './Cliente.js';

//Prueba creación de una persona

let persona1 = new Persona('Lina', 'Guerrero', 22);
//console.log(persona1.toString());
persona1.nombre = 'Maria';
console.log(`${persona1}`);
let persona2 = new Persona('Santiago', 'Valencia', 26);
console.log(`${persona2}`);

//Prueba empleados

let empleado1 = new Empleado('Santiago', 'Garcia', 30, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Lina', 'Guerrero', 23, 5000);
console.log(empleado2.toString());

let empleado3 = new Empleado(persona1.nombre, persona1.apellido, persona1.edad, 30000);
console.log(empleado3.toString());

//Prueba Clientes

let cliente1 = new Cliente('Paola', 'Rojas', 26, new Date());
console.log(cliente1.toString());