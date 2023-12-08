import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[betterHighlight]',
})
export class BetterHighlight implements OnInit {
  @HostBinding('style.color') textColor: string = 'black';
  @Input('betterHighlight') hightColor: string;

  constructor(private eRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.eRef.nativeElement,
      'background-color',
      'transparent'
    );
  }

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(
      this.eRef.nativeElement,
      'background-color',
      this.hightColor
    );
    this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(
      this.eRef.nativeElement,
      'background-color',
      'transparent'
    );

    this.textColor = 'black';
  }
}
