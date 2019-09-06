import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartItemComponent, CartListComponent } from './components';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent,
    children: [
      {
        path: '',
        component: CartListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartItemComponent, CartListComponent];
}
