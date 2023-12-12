import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class UserService {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Alice',
    },
    {
      id: 3,
      name: 'Hanibal',
    },
  ];

  getUserById(id: number) {
    return this.users.find((u) => u.id === id);
  }
}
