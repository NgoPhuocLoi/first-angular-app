import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  serverId = 1;
  serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
