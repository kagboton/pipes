import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {
    console.log(value);
    if (!value) return '';
   
    switch (targetUnit) { 
      case 'km': return value * 1.60934;
      case 'm': return value * 1.60934 * 1000;
      case 'cm': return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');
    }

    return value * 1.60934;
  }

}
