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
    this.id = this.activeRoute.snapshot.params['id'];
    this.user = this.userService.getUserById(+this.id);
    console.log(this.id, this.user);
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.user = this.userService.getUserById(+this.id);
    });
  }
}
