import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Server from '../shared/server.model';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrl: './server-item.component.css',
})
export class ServerItemComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterViewInit,
    AfterContentInit
{
  @Input() server: Server;
  @Input() name: string;
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ContentChild('paragraph', { static: true }) paragraph;

  ngOnInit() {
    console.log('onInit is called!');
    console.log(
      'Content of heading after onInit: ' + this.heading.nativeElement.innerText
    );
    console.log(
      'Content of paragraph after onInit: ' +
        this.paragraph.nativeElement.innerText
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('onChanges is called!');
  }

  ngDoCheck(): void {
    console.log('doCheck is called!');
  }

  ngAfterContentInit(): void {
    console.log(
      'Content of paragraph after afterContentInit: ' +
        this.paragraph.nativeElement.innerText
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'Content of heading after afterViewInit: ' +
        this.heading.nativeElement.innerText
    );
  }

  ngOnDestroy(): void {
    console.log('onDestroy is called!');
  }
}
