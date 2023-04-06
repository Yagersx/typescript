class Vehiculo{
    marca: string
    fecha: string
    puertas: number
    color:string

    constructor (marca: string, fecha: string, puertas:number, color:string){
        this.marca= marca;
        this.fecha= fecha;
        this.puertas= puertas;
        this.color= color;
    }

    acelerar():void{
        console.log('Acelerando...');
    }

    frenar():void{
        console.log('Frenando...');
    }

    obtenerInformacion():void{
        console.log(`El vehiculo es de la marca ${this.marca}, la fecha de fabricacion es el : ${this.fecha}, es de color: ${this.color} y tiene ${this.puertas} puertas.`);
    }
}

const coche = new Vehiculo('Ford', '12/07/2018', 4, 'Blanco');

coche.acelerar();
coche.frenar();
coche.obtenerInformacion();