import { Injectable } from '@angular/core';
import * as RouterActions from './../router/router.actions';

// @NgRx
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';

// Rxjs
import { Observable } from 'rxjs';
import { switchMap, map, concatMap, pluck } from 'rxjs/operators';

import { ProductsService } from './../../../products/services';
import { Product, ProductModel } from '../../../products/models/product.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productsService
          .getBooks()
          .then((products) => ProductsActions.getProductsSuccess({ products }))
      )
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productsService
          .updateBook(product)
          .then((updatedProduct: Product) => {
            return ProductsActions.updateProductSuccess({ product: updatedProduct });
          })
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productsService
          .addBook(product)
          .then((createdProduct: Product) => {
            return ProductsActions.createProductSuccess({ product: createdProduct });
          })
      )
    )
  );

  createUpdateProductSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
      map(action => {
        const productId = action.product.id;
        const actionType = action.type;
        let path: any[];

        if (actionType === '[Products API] UPDATE_PRODUCT_SUCCESS') {
          path = ['admin/products', { id: productId }];
        } else {
          path = ['admin/products'];
        }

        return RouterActions.go({ path });
      })
    )
  );
}

