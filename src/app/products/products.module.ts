import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent, ProductListComponent, ExtendedProductComponent, ProductReviewsComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsServicesModule } from './products.services.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ExtendedProductComponent,
    ProductReviewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsServicesModule,
    ProductsRoutingModule
  ],
  exports: []
})
export class ProductsModule { }
