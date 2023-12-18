import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, size: number = 10): unknown {
    return value.length > size
      ? value.substring(0, size) + '...'
      : value.substring(0, size);
  }
}
