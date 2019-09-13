import { ProductModel } from '../../products/models/product.model';

export class CartItemModel {
  public id?: number;
  public product: ProductModel;
  public quantity: number;
}
