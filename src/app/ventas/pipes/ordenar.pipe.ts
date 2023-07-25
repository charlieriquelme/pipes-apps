import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  // si en una variable le dejamos los 3 puntos, nosotros estamos aceptando n datos que nos puede enviar
  transform(heroes: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {

    switch(ordenarPor){
      case 'nombre':
          return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
          return heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1); // si se mantiene el ordenamiento como el de arriba, permitiriamos tener como primero los false y luego los true
      case 'colores':
          return heroes.sort((a, b) => (a.color > b.color) ? -1 : 1);
      default:
        return heroes;
    }
  }

}
