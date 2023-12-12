import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  loggedIn = false;

  login() {
    this.loggedIn = true;
    console.log(this.loggedIn + 'h ehe');
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }
}
