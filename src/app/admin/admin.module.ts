import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OrdersModule } from '../orders/orders.module';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from '../products/products.module';

@NgModule({
  imports: [CommonModule, FormsModule, AdminRoutingModule, OrdersModule, ProductsModule],
  declarations: [AdminRoutingModule.components]
})
export class AdminModule { }
