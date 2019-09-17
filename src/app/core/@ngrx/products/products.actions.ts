import { createAction, props } from '@ngrx/store';

import { Product } from './../../../products/models/product.model';

export const getProducts = createAction('[Products Page (App)] GET_PRODUCTS');
export const getProductsSuccess = createAction(
  '[Products API] GET_PRODUCTS_SUCCESS',
  props<{ products: Product[] }>()
);

export const createProduct = createAction(
  '[Add/Edit Product Page] CREATE_PRODUCT',
  props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Products API] CREATE_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  '[Add/Edit Product Page] UPDATE_PRODUCT',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Products API] UPDATE_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);
