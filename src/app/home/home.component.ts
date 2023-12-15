import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, filter, map, of } from 'rxjs';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private subcription;
  private authService = inject(AuthService);
  loggedIn: boolean;

  constructor(private router: Router) {}
  onNavigate() {
    this.router.navigate(['/servers']);
  }

  ngOnInit(): void {
    const sequence = new Observable((subcriber) => {
      let count = 0;
      const interval = setInterval(() => {
        subcriber.next(count++);
      }, 1000);

      return {
        unsubscribe() {
          clearInterval(interval);
        },
      };
    });

    const squareOdd = sequence.pipe(
      filter((value: number) => {
        return value % 2 == 1;
      }),
      map((value: number) => value * value)
    );

    this.subcription = squareOdd.subscribe({
      next(value) {
        console.log(value);
      },
      complete() {
        console.log('Completed!');
      },
    });

    this.authService.logginState.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
