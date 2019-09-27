import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartItemComponent, CartListComponent } from './components';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
    // Подозреваю, что то, что ниже не нужно,
    // Так как если есть свойство children, то это значит, что
    // в родительском компоненте, в даном случае, CartListComponent
    // должна быть директива <router-outlet>, а ее там нет
    // children: [
    //   {
    //     path: '',
    //     component: CartListComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartItemComponent, CartListComponent];
}
