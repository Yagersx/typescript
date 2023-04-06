class Padre {
    nombre:string
    edad:number

    constructor(nombre:string, edad:number){
        this.nombre=nombre,
        this.edad=edad;
    }

    mostrarNombre():void{
        console.log(this.nombre);
    }
}


class Hijo extends Padre{
    apellido:string

    constructor(nombre:string, edad:number, apellido:string){
        super(nombre,edad);
        this.apellido= apellido;
    }

    mostrarApellido():void{
        console.log(`Mi apellido es ${this.apellido}`);
    }
}


const nuevoHijo = new Hijo('Natalia', 18, 'Martinez');

nuevoHijo.mostrarNombre();
nuevoHijo.mostrarApellido();