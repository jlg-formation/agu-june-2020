import { Pipe, PipeTransform } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const seconds = ('' + (value % 60)).padStart(2, '0');
    const minutes = ('' + Math.floor(value / 60)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
