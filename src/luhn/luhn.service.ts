import { Injectable } from '@nestjs/common';

@Injectable()
export class LuhnService {
  validateNumber(number: number): boolean {
    const numberAsArray = String(number).split('').map(Number);
    const parity = numberAsArray.length % 2;
    let sum = 0;
    for (let i = numberAsArray.length - 1; i >= 0; i--) {
      const currentDigit = numberAsArray[i];
      if ((i + 1) % 2 == parity) {
        sum += currentDigit;
      } else if (currentDigit > 4) {
        sum += 2 * currentDigit - 9;
      } else {
        sum += 2 * currentDigit;
      }
    }

    return sum % 10 === 0;
  }
}
