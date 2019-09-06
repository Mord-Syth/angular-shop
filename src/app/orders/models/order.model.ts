import { OrderedProductModel } from './orderedProduct.model';
import { Status } from '../../common/enums/status';

export class OrderModel {
  public orderId: number;
  public status: Status;
  public totalPrice: number;
  public products: OrderedProductModel[];
}
