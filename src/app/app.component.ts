import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  nombre:string = 'charlie riquelMe';
  valor:number = 1000;
  obj = {
    nombre: 'charlie'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

  title = 'pipesApp';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
