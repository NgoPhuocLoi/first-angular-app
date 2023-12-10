import { Component, OnInit } from '@angular/core';
import Server from './shared/server.model';
import ServerService from '../services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.servers = this.serverService.servers;
  }
}
