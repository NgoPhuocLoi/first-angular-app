import { Component, OnInit } from '@angular/core';
import Server from '../shared/server.model';
import ServerService from '../../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.servers = this.serverService.servers;
  }
}
