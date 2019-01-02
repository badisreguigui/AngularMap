import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrePipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], mot:any): any {
    return value.filter(data =>
      {
        console.log("NAME==>"+mot);
        return data.name.includes(mot);
      }
    );
  }
}
