interface General{
    (nombre:string, apellido:string, edad:number):void
}


let funcionGeneralUno:General = function (nombre:string, apellido:string , edad:number){
    console.log(`${nombre} , ${apellido}, ${edad}`);
}

funcionGeneralUno('Irving', 'Martinez', 24);