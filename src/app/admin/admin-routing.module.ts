import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {
  ManageOrdersComponent,
  AdminProductComponent,
  AdminProductFormComponent,
  AdminProductListComponent
} from './components';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthorizationGuard } from '../core/guards/authorization.guard';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AuthorizationGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: AdminProductListComponent },
          { path: 'product/add', component: AdminProductFormComponent },
          {
            path: 'product/edit:productId',
            component: AdminProductFormComponent,
            resolve: {
              product: ProductResolveGuard
            }
          },
          { path: 'orders', component: ManageOrdersComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ManageOrdersComponent,
    AdminProductListComponent,
    AdminProductComponent,
    AdminProductFormComponent
  ];
}
