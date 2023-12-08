import { Component, Input } from '@angular/core';
import Server from '../shared/server.model';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrl: './server-item.component.css',
})
export class ServerItemComponent {
  @Input() server: Server;
}
