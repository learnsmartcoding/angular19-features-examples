import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of, delay, catchError } from 'rxjs';
import { MockUserService } from '../Mocks/mock.service';

interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}


@Component({
  selector: 'app-debug-demo',
  imports: [CommonModule],
  templateUrl: './debug-demo.component.html',
  styleUrl: './debug-demo.component.css'
})
export class DebugDemoComponent implements OnInit {

  users: User[] = [];
  activeUsers: User[] = [];
  averageAge: number = 0;
  
constructor(private userService: MockUserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers()
    .pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // fallback empty list
      })
    )
    .subscribe(users => {
      this.users = users;
      setTimeout(() => {
        this.processUsers(users);
      }, 500);
    });
  }
  processUsers(users: User[]) {
    const validUsers = this.filterActiveUsers(users);
    this.activeUsers = validUsers;
    this.averageAge = this.calculateAverageAge(validUsers);
    this.logUserNames(validUsers);
  
    const first = this.getFirstActiveUserName(validUsers);
    console.log('First Active User:', first);
  }

  getFirstActiveUserName(users: User[]): string {
    if (!users || users.length === 0) return 'No active users';
  
    for (let u of users) {
      if (u.name.startsWith('A')) {
        return u.name;
      }
    }
  
    // 👇 Intentional bug: trying to access property of undefined
    return users[10].name;
  }
  

  getMockUsers(): User[] {
    return [
      { id: 1, name: 'Alice', age: 25, isActive: true },
      { id: 2, name: 'Bob', age: 30, isActive: false },
      { id: 3, name: 'Charlie', age: 22, isActive: true },
      { id: 4, name: 'Daisy', age: 28, isActive: true }
    ];
  }

  filterActiveUsers(users: User[]): User[] {
    return users.filter(u => u.isActive);
  }

  calculateAverageAge(users: User[]): number {
    if (users.length === 0) return 0;
    const total = users.reduce((sum, u) => sum + u.age, 0);
    return Math.round(total / users.length);
  }

  logUserNames(users: User[]) {
    for (let user of users) {
      console.log(`User: ${user.name}`);
    }
  }

  
}
