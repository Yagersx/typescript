/*No es lo mejor ya que todo se queda en memoria TODO , en la version 1 tu puedes cargar solo un objeto del export*/
import * as paquetea from './moduloa';

console.log(`Importando el nombre del modulo a y es ${paquetea.nombre}`);

const humano: paquetea.Humano = {nombre:'Irving'};