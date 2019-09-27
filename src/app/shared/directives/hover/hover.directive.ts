import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  // похоже, что этой зависимости не надо
  constructor(private el: ElementRef) { }

  @HostBinding('class') className = '';
  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    this.className =  'hovered';
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this.className = '';
  }
}
