import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, direction: string = 'asc'): any {
    if (!Array.isArray(value)) {
      throw new Error('Value to sort must be an array.');
    }

    if (direction === 'asc') {
      return value.slice().sort();
    } else if (direction === 'desc') {
      return value.slice().sort().reverse();
    } else {
      return value;
    }
  }
}
