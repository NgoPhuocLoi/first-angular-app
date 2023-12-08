import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(event: Event) {
    console.log(
      'Server content from @ViewChild: ' +
        this.serverContentInput.nativeElement.value
    );
    let type = (<HTMLButtonElement>event.target).dataset.type;
    this.onServerAdded.emit(new Server(this.name, type, this.content));
  }
}
