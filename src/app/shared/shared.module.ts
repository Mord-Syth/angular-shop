import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { ColorClickDirective } from './directives/color-click/color-click.directive';



@NgModule({
  declarations: [HoverDirective, ColorClickDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HoverDirective,
    ColorClickDirective
    ]
})
export class SharedModule { }
