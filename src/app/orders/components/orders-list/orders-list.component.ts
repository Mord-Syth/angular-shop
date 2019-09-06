import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order.model';
import { Status } from '../../../common/enums/status';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: OrderModel[];
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }

  getStatusName(num: number): string {
    return Status[num];
  }
}
