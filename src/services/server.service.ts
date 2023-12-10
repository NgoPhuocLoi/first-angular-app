import { Injectable } from '@angular/core';
import Server from '../app/shared/server.model';

@Injectable({
  providedIn: 'root',
})
export default class ServerService {
  public servers: Server[] = [
    new Server('Server 1', 'server', 'Content of server 1'),
  ];

  addServer(server: Server) {
    this.servers.push(server);
  }
}
