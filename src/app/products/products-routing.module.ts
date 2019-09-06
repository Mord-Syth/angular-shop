import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent, ExtendedProductComponent, ProductReviewsComponent } from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'products-list/:productId',
    component: ExtendedProductComponent
  },
  {
    path: 'reviews',
    component: ProductReviewsComponent,
    outlet: 'reviews'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
