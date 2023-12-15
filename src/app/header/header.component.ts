import { Component, OnInit, inject } from '@angular/core';
import AuthService from '../../services/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.logginState.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
