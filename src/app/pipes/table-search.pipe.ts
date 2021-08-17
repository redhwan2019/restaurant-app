import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSearch',
})
export class TableSearchPipe implements PipeTransform {
  transform(list: any[], value: string) {
    return value ? list.filter((r) =>
    r.name.toLowerCase().includes(value.toLowerCase()) ) : list;
  }
}
