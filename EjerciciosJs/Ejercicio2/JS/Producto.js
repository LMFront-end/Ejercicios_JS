class Producto {

    static contadorProducto = 0;

    constructor(nombre, precio) {

        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    //método get id producto

    get idProducto() {
        return this._idProducto;
    }

    //métodos get y set para los atributos del constructor

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        return this._precio = precio;
    }

    toString() {
        return `
        
        
        `
    }
}