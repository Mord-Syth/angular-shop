import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { ColorClickDirective } from './directives/color-click/color-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmailValidatorDirective } from './directives/email-validator/email-validator.directive';



@NgModule({
  declarations: [HoverDirective, ColorClickDirective, OrderByPipe, EmailValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [
    // directives
    HoverDirective,
    ColorClickDirective,
    EmailValidatorDirective,

    // pipes
    OrderByPipe
    ]
})
export class SharedModule { }
