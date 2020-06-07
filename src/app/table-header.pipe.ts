import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableHeader'
})
export class TableHeaderPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
