import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UserService from '../user.service';
import User from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  id: number;
  user: User;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data) => {
      this.user = data['user'];
    });
  }
}
