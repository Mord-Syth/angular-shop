import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CartServicesModule } from './cart-services.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartRoutingModule.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartRoutingModule,
    CartServicesModule
  ]
})
export class CartModule { }
