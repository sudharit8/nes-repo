import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    // Check if the value is provided and is a valid 16-digit number
    if (value && /^\d{16}$/.test(value)) {
      // Format the string with dashes every four digits
      return value.match(/.{1,4}/g)!.join('-'); // Use non-null assertion operator (!) here
    } else {
      return 'Invalid credit card number. Please enter a 16-digit number.';
    }
  }
}
