import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorClick]'
})
export class ColorClickDirective {

  @Input('color') borderColor: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') onMouseEnter() {
    this.setBorderColor(this.borderColor || 'blue');
  }

  private setBorderColor(color: string) {
    this.render.setStyle(this.el.nativeElement, 'border', `${color} 1px solid `);
  }

}
