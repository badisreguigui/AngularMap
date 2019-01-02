import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], mot:any): any {
    if(!value){
      console.log(value);
      return value;
    }
    return value.filter(data=> {
      return data.lastname.includes(mot)||data.firstname.includes(mot)||data.contractype.includes(mot);
      }
    );
  }

}
