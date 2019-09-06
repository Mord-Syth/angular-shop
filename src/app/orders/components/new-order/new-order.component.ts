import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order.model';
import { Router, UrlTree } from '@angular/router';
import { CanComponentDeactivate } from '../../../core/interfaces/can-component-deactivate.interface';
import { Observable } from 'rxjs';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit, CanComponentDeactivate {

  currentOrder: OrderModel;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.currentOrder = this.ordersService.getCurrentOrder();
  }

  onCreateOrderClicked(): void {
    this.ordersService.startProcessing(this.currentOrder);
    const link = ['/orders'];
    this.router.navigate(link);
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (!this.ordersService.getCurrentOrder()) {
      return true;
    }
    return this.dialogService.confirm('If you leave you cart will be lost. Proceed?');
  }
}
