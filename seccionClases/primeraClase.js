var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, fecha, puertas, color) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
        this.color = color;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log('Acelerando...');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('Frenando...');
    };
    Vehiculo.prototype.obtenerInformacion = function () {
        console.log("El vehiculo es de la marca ".concat(this.marca, ", la fecha de fabricacion es el : ").concat(this.fecha, ", es de color: ").concat(this.color, " y tiene ").concat(this.puertas, " puertas."));
    };
    return Vehiculo;
}());
var coche = new Vehiculo('Ford', '12/07/2018', 4, 'Blanco');
coche.acelerar();
coche.frenar();
coche.obtenerInformacion();
