function mostrar():void{
    console.log('Funcion1')

}

const mostrar2 = ():void =>{
console.log('Funcion2');
}

const parametrosOpcionales = (nombre:string, apellido:string, edad?:number):void =>{

    let edadValidada: string|number= !isNaN(edad) ? edad : 'desconocida';

    console.log(`Mi nombre es: ${nombre}, mi apellido es: ${apellido} y mi edad es ${edadValidada}.`);
}

mostrar();
mostrar2();
parametrosOpcionales('Irving', 'Martinez');
parametrosOpcionales('Carolina', 'Verduzco', 24);