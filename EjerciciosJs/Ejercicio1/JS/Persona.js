//Clase Padre

class Persona {

    //declaración de la variable static
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {

        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona() {
        return this._idPersona;
    }

    //Métodos get y set para los atributos

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        return this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        return this._edad = edad;
    }

    //inicializar el método toString
    toString() {
        return `
            id: ${this._idPersona} 
            nombre: ${this._nombre} ${this._apellido} 
            edad: ${this._edad}
            `;

    }
}

export default Persona;