import { ProductModel } from '../../products/models/product.model';

export class CartItemModel {
  public cartItemId: number;
  public product: ProductModel;
  public quantity: number;
}
