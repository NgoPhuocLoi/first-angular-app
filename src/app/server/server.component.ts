import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = 1;
  serverStatus = 'Offline';
  allowNewServer = false;
  serverCreationStatus = 'No server is created';
  serverName = 'Server name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreate() {
    this.serverCreationStatus = 'The server is created!';
  }

  onServerNameChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
