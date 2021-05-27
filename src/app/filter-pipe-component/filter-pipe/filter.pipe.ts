import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: string[], filterer = ''): unknown {
    if (values.length < 1 || filterer.length < 1) {
      return values;
    }

    return values.filter(value => value.toLowerCase().startsWith(filterer.toLowerCase()));
  }

}
