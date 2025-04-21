import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MockUserService {
  private shouldFail = false; // Toggle this to simulate errors

  getUsers(): Observable<User[]> {
    if (this.shouldFail) {
      return throwError(() => new Error('Failed to fetch users')).pipe(delay(1000));
    }

    const users: User[] = [
      { id: 1, name: 'Alice', age: 25, isActive: true },
      { id: 2, name: 'Bob', age: 30, isActive: false },
      { id: 3, name: 'Charlie', age: 22, isActive: true },
      { id: 4, name: 'Daisy', age: 28, isActive: true }
    ];

    return of(users).pipe(delay(1000));
  }
}
