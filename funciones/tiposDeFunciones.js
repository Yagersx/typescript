function mostrar() {
    console.log('Funcion1');
}
var mostrar2 = function () {
    console.log('Funcion2');
};
var parametrosOpcionales = function (nombre, apellido, edad) {
    var edadValidada = !isNaN(edad) ? edad : 'desconocida';
    console.log("Mi nombre es: ".concat(nombre, ", mi apellido es: ").concat(apellido, " y mi edad es ").concat(edadValidada, "."));
};
mostrar();
mostrar2();
parametrosOpcionales('Irving', 'Martinez');
parametrosOpcionales('Carolina', 'Verduzco', 24);
