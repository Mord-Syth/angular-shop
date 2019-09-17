import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../products/models/product.model';
import { AppState, selectSelectedProductByUrl } from '../../../core/@ngrx';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit, OnDestroy {

  product: Product;
  private sub: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.sub = this.store.pipe(select(selectSelectedProductByUrl))
      .subscribe(product => this.product = { ...product });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSaveProduct() {
    const product = { ...this.product } as Product;
    if (this.product.id) {
      this.store.dispatch(ProductsActions.updateProduct({ product }));
    } else {
      this.store.dispatch(ProductsActions.createProduct({ product }));
    }
  }

  onGoBack(): void {
    this.store.dispatch(RouterActions.go(
      {
        path: ['/admin/products']
      })
    );
  }
}
