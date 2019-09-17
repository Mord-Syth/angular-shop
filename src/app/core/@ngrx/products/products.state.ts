import { Product } from './../../../products/models/product.model';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState extends EntityState<Product> {
  readonly loading: boolean;
  readonly loaded: boolean;
}

export function selectProductId(product: Product): number {
  // In this case this would be optional since primary key is id
  return product.id;
}

export function sortProducts(product1: Product, product2: Product): number {
  return product1.name.localeCompare(product2.name);
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: selectProductId,
  sortComparer: sortProducts
});

export const initialProductsState: ProductsState = adapter.getInitialState({
  loading: false,
  loaded: false
});
