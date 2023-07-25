import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styles: [
    ]
})
export class MenuComponent {
    items: MenuItem[] = [];

    ngOnInit() {

        this.items = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items:[
                    {
                        label: 'Texto y Fechas',
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                    },
                    {
                        label: 'Numeros',
                        icon: 'pi pi-dollar',
                        routerLink: 'numeros'
                    },
                    {
                        label: 'No comunes',
                        icon: 'pi pi-globe',
                        routerLink: 'no-comunes'
                    }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                routerLink: 'ordenar'
            }
        ];
    }

}
