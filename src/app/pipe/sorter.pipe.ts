import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: null | any[], key: string, atoz: number): any[] | null {
    if (!Array.isArray(value) || !key){
      return value;
    }
    return value.sort((a,z)=>{
      if(typeof a[key]==='number'&& typeof z[key]==='number') {
        return (a[key]- z[key]);
      }
      const aStr: string = (''+ a[key]).toLowerCase();
      const zStr: string = (''+ z[key]).toLowerCase();
      return aStr.localeCompare(zStr);
      });
    }

}
