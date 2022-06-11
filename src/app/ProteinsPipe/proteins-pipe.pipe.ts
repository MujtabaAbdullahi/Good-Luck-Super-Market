import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proteinsPipe'
})
export class ProteinsPipePipe implements PipeTransform {

  transform(value: string, limite: number): any {
    if(!value)
    return null;
    let actuallimit= (limite)? limite:50;
    return value.substring(0,actuallimit)+"...";
  }

}
