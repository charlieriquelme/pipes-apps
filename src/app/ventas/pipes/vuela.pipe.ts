import {Pipe, PipeTransform } from '@angular/core'

@Pipe({
    // el nombre dle pipe personalizado se definirá en la siguiente linea
    name: 'vuela'
})

export class  VuelaPipe  implements PipeTransform{

    transform( VuelaSN: boolean ): string {
        return (VuelaSN) ? 'vuela' : 'no vuela';
    }
}