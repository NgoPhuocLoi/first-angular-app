import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import ServerService from '../../services/server.service';
import Server from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  providers: [LoggingService],
})
export class CockpitComponent {
  name: string = '';
  content: string = '';
  condition = false;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private serverService: ServerService
  ) {}
  onAddServer(event: Event) {
    this.loggingService.info(
      'Server content from @ViewChild: ' +
        this.serverContentInput.nativeElement.value
    );
    let type = (<HTMLButtonElement>event.target).dataset.type;
    this.serverService.addServer(new Server(this.name, type, this.content));
  }
}
