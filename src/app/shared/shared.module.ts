import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover/hover.directive';



@NgModule({
  declarations: [HoverDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
