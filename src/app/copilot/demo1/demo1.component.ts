import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  imports: [FormsModule, CommonModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css',
})
export class Demo1Component {
  userNumber: number = 0;
  isPrime: boolean = false;

  constructor() {}
  isPrimeNumber(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  checkPrime() {
    this.isPrime = this.isPrimeNumber(this.userNumber);
  }
}
