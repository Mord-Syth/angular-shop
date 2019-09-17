import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  currentOrder: OrderModel;

  constructor(
    private ordersService: OrdersService,
    private router: Router) { }

  ngOnInit() {
    this.currentOrder = this.ordersService.getCurrentOrder();
  }

  onCheckOutOrderClicked(): void {
    const link = ['/orders/checkout'];
    this.router.navigate(link);
  }
}
