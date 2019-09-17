import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel, Product } from '../../../products/models/product.model';
import { Store, select } from '@ngrx/store';
import { AppState, selectProductsData } from '../../../core/@ngrx';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  books$: Observable<ReadonlyArray<Product>>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.books$ = this.store.pipe(select(selectProductsData));
  }
  onAddClicked() {
    const link = ['admin/product/add'];
    this.store.dispatch(RouterActions.go(
        {
          path: link
        })
    );
  }

  onEditClicked(product: ProductModel): void {
    const link = ['admin/product/edit', product.id];
    this.store.dispatch(RouterActions.go(
        {
          path: link
        })
    );
  }
}
