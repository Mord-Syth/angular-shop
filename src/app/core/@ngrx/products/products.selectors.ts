import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState, adapter } from './products.state';
import { ProductModel, Product } from './../../../products/models/product.model';
import { selectRouterState } from './../router/router.selectors';
import { Category } from '../../../common/enums/category';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const {
  selectEntities: selectProductsEntities,
  selectAll: selectProductsData
} = adapter.getSelectors(selectProductsState);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);
export const selectSelectedProductByUrl = createSelector(
  selectProductsEntities,
  selectRouterState,
  (products, router): Product => {
    const id = router.state.params.id;
    if (id) {
      return products[id] as ProductModel;
    } else {
      return new ProductModel(null, '', '', 0, Category.Fantasy, true);
    }
  });
