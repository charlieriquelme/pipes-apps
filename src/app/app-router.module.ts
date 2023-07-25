import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modulos 
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';

// dentro de este archivo vamos a definir las rutasy el nombre de la url que tendrá cada modulo dentro en  la página web
const routes :Routes = [
  {
    path: '',
    component : BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRouterModule { }
