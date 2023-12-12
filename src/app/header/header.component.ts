import { Component, OnInit, inject } from '@angular/core';
import AuthService from '../../services/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  loggedIn: boolean = true;
  authService = inject(AuthService);

  onLogin() {
    this.loggedIn = true;
    this.authService.login();
  }

  onLogout() {
    this.loggedIn = false;
    this.authService.logout();
  }
}
