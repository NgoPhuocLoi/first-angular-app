import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private logginSubject = new Subject<boolean>();

  logginState = this.logginSubject.asObservable();

  login() {
    this.logginSubject.next(true);
  }

  logout() {
    this.logginSubject.next(false);
  }

  // isAuthenticated() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.loggedIn);
  //     }, 1000);
  //   });
  // }
}
