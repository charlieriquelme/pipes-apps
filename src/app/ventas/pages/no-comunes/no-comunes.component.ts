import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'fernanda';
  genero:string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  cliente : string []= ['maria','pedro','juan','juan','juan','juan','juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    // con el simbolo # podemos saber el largo del arreglo cliente
    'other': 'tenemos # clientes esperando',
  };

  cambiarCliente(){
    this.nombre = 'charlie';
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.cliente.pop();
  }

  // keyvalue Pipe
  persona = {
    nombre: 'Charlie',
    edad: 26,
    direccion: 'coquimbo, chile'
  }

  // json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ]
  
  // Asinc Pipe
  
  // la variable miObservable significa que es un observable que tienen dentro de él 1000 numeros => ejemplo 0,1,2,...
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}

