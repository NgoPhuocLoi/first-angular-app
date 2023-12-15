import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
  providedIn: 'root',
})
export default class UserService {
  users: User[] = [
    new User(1, 'Max', 'max@gmail.com'),
    new User(2, 'Alice', 'alice@gmail.com'),
    new User(3, 'Hanibal', 'hanibal@gmail.com'),
  ];

  getUserById(id: number) {
    return this.users.find((u) => u.id === id);
  }
}
