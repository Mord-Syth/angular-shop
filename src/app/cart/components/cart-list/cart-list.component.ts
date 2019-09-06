import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cartItem.model';
import { Router } from '@angular/router';
import { OrdersService } from '../../../orders/services/orders.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems: CartItemModel[] = [];
  getSum: () => number;
  getCount: () => number;
  sortOptions = [
    {
      name: 'Name',
      value: 'product.name'
    },
    {
      name: 'Price',
      value: 'product.price'
    },
    {
      name: 'Count',
      value: 'quantity'
    }
  ];
  selectedValue = this.sortOptions[0];

  constructor(private cartService: CartService, private router: Router, private ordersService: OrdersService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cart;
    this.getSum = this.cartService.getSum;
    this.getCount = this.cartService.getCount;
  }

  onRemoveClicked(item: CartItemModel): void {
    this.cartService.removePositionFromCart(item);
  }

  onIncreaseClicked(item: CartItemModel): void {
    this.cartService.increaseQuantity(item);
  }

  onDecreaseClicked(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item);
  }

  onOrderClicked(): void {
    this.ordersService.create(this.cartItems);
    this.cartService.removeAll();
    const link = ['/orders/new'];
    this.router.navigate(link);
  }
}
