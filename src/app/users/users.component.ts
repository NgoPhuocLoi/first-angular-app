import { Component, OnInit } from '@angular/core';
import UserService from './user.service';
import { CanComponentDeactive } from '../can-deactive.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit, CanComponentDeactive {
  users = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  canDeactive() {
    return confirm('You want to exit?');
  }
}
