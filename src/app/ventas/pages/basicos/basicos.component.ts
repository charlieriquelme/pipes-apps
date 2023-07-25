import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'charlie';
  nombreUpper: string = 'CHARLIE';
  nombreCompleto: string = 'charlIe riqUelme';

  fecha : Date =  new Date (); //el dia de hoy :D

}
