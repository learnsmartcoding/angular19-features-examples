import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prime-number',
  imports: [FormsModule, CommonModule],
  templateUrl: './prime-number.component.html',
  styleUrl: './prime-number.component.css',
})
export class PrimeNumberComponent {
  constructor() {}
  userNumber: number = 0;
  isPrime: boolean = false;

  isPrimeNumber(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // function to check if a given number from user is prime or not
  checkPrime(): void {
    const num = Number(this.userNumber);
    if (isNaN(num)) {
      this.isPrime = false;
    } else {
      this.isPrime = this.isPrimeNumber(num);
    }
  }
}
