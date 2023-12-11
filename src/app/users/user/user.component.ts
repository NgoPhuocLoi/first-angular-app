import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  id = 1;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
