import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ProductListComponent,
  ExtendedProductComponent,
  ProductReviewsComponent
} from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'products-list/:id',
    // в этом компоненте находиться <router-outlet name="reviews"></router-outlet>,
    // значит должен быть дочерний роутинг. Он немного не стандартный,
    // так как нет основного компонента, но такое тоже может быть
    component: ExtendedProductComponent,
    children: [
      {
        path: 'reviews',
        component: ProductReviewsComponent,
        outlet: 'reviews'
      }
    ]
  },
  // Если этот объект описать так, то тогда <router-outlet name="reviews"></router-outlet>
  // должен находиться в AppComponents, а у вас это не так.
  // {
  //   path: 'reviews',
  //   component: ProductReviewsComponent,
  //   outlet: 'reviews'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
