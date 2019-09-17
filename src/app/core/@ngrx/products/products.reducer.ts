import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState, initialProductsState, adapter } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    return adapter.addAll(products, { ...state, loading: false, loaded: true });
  }),

  on(ProductsActions.createProduct, state => {
    return { ...state };
  }),
  on(ProductsActions.createProductSuccess, (state, { product }) => {
    return adapter.addOne(product, state);
  }),

  on(ProductsActions.updateProduct, state => {
    return { ...state };
  }),
  on(ProductsActions.updateProductSuccess, (state, { product }) => {
    return adapter.updateOne({ id: product.id, changes: product }, state);
  })
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}

