import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UserService from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  id: number;
  user: {
    id: number;
    name: string;
  };
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data) => {
      this.user = data['user'];
    });
  }
}
