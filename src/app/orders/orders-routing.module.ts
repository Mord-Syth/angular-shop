import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent, NewOrderComponent, OrdersListComponent } from './components';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'orders',
    canActivate: [AuthGuard],
    component: OrdersListComponent
  },
  {
    path: 'orders/new',
    component: NewOrderComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [OrderComponent, NewOrderComponent, OrdersListComponent];
}
