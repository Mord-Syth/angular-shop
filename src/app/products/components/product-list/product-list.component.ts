import { Component, OnInit } from '@angular/core';

import { ProductModel, Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { Store, select } from '@ngrx/store';
import { AppState, selectProductsData } from '../../../core/@ngrx';
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books$: Observable<ReadonlyArray<Product>>;
 constructor(
    private cartService: CartService,
    private store: Store<AppState>) {}

  ngOnInit() {
    this.books$ = this.store.pipe(select(selectProductsData));
    this.store.dispatch(ProductsActions.getProducts());
  }

  onAddedToCart(product: ProductModel): void {
    this.cartService.addToCart(product);
  }

  onViewMoreClicked(product: ProductModel): void {
    const link = ['/products-list', product.id];
    this.store.dispatch(RouterActions.go(
      {
        path: link
      })
    );
  }
}
