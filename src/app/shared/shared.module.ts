import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { ColorClickDirective } from './directives/color-click/color-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [HoverDirective, ColorClickDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [
    // directives
    HoverDirective,
    ColorClickDirective,

    // pipes
    OrderByPipe
    ]
})
export class SharedModule { }
