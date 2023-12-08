import { Component } from '@angular/core';
import Server from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  servers: Server[] = [new Server('Server 1', 'server', 'Content of server 1')];

  onServerAdded(serverData: Server) {
    console.log(serverData);
    this.servers.push(serverData);
  }
}
