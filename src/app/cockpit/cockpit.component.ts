import { Component, EventEmitter, Output } from '@angular/core';
import Server from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() onServerAdded = new EventEmitter<Server>();
  name: string = '';
  content: string = '';

  onAddServer(event: Event) {
    let type = (<HTMLButtonElement>event.target).dataset.type;
    this.onServerAdded.emit(new Server(this.name, type, this.content));
  }
}
