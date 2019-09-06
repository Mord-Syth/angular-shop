import { Injectable } from '@angular/core';
import { OrdersServicesModule } from '../orders-services.module';
import { OrderModel } from '../models/order.model';
import { CartItemModel } from '../../cart/models/cartItem.model';
import { OrderedProductModel } from '../models/orderedProduct.model';
import { Status } from '../../common/enums/status';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { AuthenticationService } from '../../core/services/authentication.service';

@Injectable({
  providedIn: OrdersServicesModule
})
export class OrdersService {

  private orders: OrderModel[] = [];
  private currentOrder: OrderModel = null;
  private id = 0;

  constructor(private storage: LocalStorageService, private authService: AuthenticationService) { }

  create(cartItems: CartItemModel[]): void {
    const order = new OrderModel();
    order.orderId = this.getId();
    order.status = Status.New;
    order.products = [];
    order.totalPrice = 0;
    for (const item of cartItems) {
      const orderedProduct = {
        productId: item.product.productId,
        name: item.product.name,
        author: item.product.author,
        quantity: item.quantity,
        price: item.quantity * item.product.price
      };
      order.totalPrice += orderedProduct.price;
      order.products.push(orderedProduct);
    }
    this.currentOrder = order;
  }

  getOrders(): OrderModel[] {
    const key = this.authService.getUserName();
    return this.storage.getObject(key) || [];
  }

  getAllOrders(): OrderModel[] {
    const userCollection = this.storage.getObject('user') || [];
    const adminCollection = this.storage.getObject('admin') || [];
    return userCollection.concat(adminCollection);
  }

  getCurrentOrder(): OrderModel {
    return this.currentOrder;
  }

  startProcessing(order: OrderModel): void {
    const key = this.authService.getUserName();
    order.status = Status.InProcess;
    const orders = this.storage.getObject(key) || [];
    orders.push(order);
    this.storage.setObject(key, orders);
    this.currentOrder = null;
  }

  completeOrder(order: OrderModel) {
    order.status = Status.Complete;
    this.updateStorage(order);
  }

  cancelOrder(order: OrderModel) {
    order.status = Status.Canceled;
    this.updateStorage(order);
  }

  private getId(): number {
    return Math.round(Math.random() * 1000);
  }

  private updateStorage(order: OrderModel): void {
    if (!this.updateStorageByUser('user', order)) {
      this.updateStorageByUser('admin', order);
    }
  }

  private updateStorageByUser(name: string, order: OrderModel): boolean {
    const userCollection = this.storage.getObject(name);
    const index = userCollection.findIndex(item => item.orderId === order.orderId);
    if (index > -1) {
      userCollection[index] = order;
      this.storage.setObject(name, userCollection);
      return true;
    }
    return false;
  }
}
