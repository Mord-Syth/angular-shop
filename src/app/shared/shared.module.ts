import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { ColorClickDirective } from './directives/color-click/color-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmailValidatorDirective } from './directives/email-validator/email-validator.directive';

const directives = [
  HoverDirective,
  ColorClickDirective,
  EmailValidatorDirective
];

@NgModule({
  declarations: [...directives, OrderByPipe],
  imports: [CommonModule],
  exports: [
    ...directives,

    // pipes
    OrderByPipe
  ]
})
export class SharedModule {}
