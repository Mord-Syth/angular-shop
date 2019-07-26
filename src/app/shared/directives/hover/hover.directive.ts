import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('class') className = '';
  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    this.className =  'hovered';
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this.className = '';
  }
}
