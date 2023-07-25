import {Pipe, PipeTransform } from '@angular/core'

@Pipe({
    // el nombre dle pipe personalizado se definirá en la siguiente linea
    name: 'mayusculas'
})

export class  MayusculasPipe  implements PipeTransform{

    transform(dato :string, enMayusculas: boolean ): string {
        console.log(enMayusculas)

        // if(enMayusculas){
        //     return dato.toUpperCase();
        // }else{
        //     return dato.toLowerCase();
        
        // }

        return (enMayusculas) ? dato.toUpperCase() : dato.toLowerCase();
    }
}