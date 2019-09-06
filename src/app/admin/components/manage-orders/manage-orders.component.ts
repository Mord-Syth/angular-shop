import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../orders/services/orders.service';
import { OrderModel } from '../../../orders/models/order.model';
import { Status } from '../../../common/enums/status';

@Component({
  templateUrl: 'manage-orders.component.html',
  styleUrls: ['manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders: OrderModel[];
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.orders = this.ordersService.getAllOrders();
  }

  getStatusName(num: number): string {
    return Status[num];
  }

  onCompleteClicked($event: OrderModel): void {
    this.ordersService.completeOrder($event);
  }

  onCancelClicked($event: OrderModel): void {
    this.ordersService.cancelOrder($event);
  }
}
