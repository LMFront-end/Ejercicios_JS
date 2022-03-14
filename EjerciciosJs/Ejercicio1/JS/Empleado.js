import Persona from './Persona.js';

class Empleado extends Persona {

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);

        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    //método get y set para sueldo 

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        return this._sueldo = sueldo;
    }

    toString() {
        return `
            ${super.toString()} 
            id tipo empleado: ${this._idEmpleado} 
            sueldo: ${this._sueldo}`;
    }
}

export default Empleado;