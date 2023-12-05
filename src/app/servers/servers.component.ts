import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'Server name';
  servers = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onServerNameChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
