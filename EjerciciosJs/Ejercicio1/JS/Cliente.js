import Persona from './Persona.js';

class Cliente extends Persona {

    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `
            ${super.toString()}
            id tipo cliente: ${this._idCliente}
            fecha Registro: ${this._fechaRegistro}
        `
    }
}

export default Cliente;