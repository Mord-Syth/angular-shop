import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cartItem.model';
import { Router } from '@angular/router';
import { OrdersService } from '../../../orders/services/orders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
    

  cartItems: CartItemModel[] = [];
  sum: number;
  count: number;
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

  private sub: Subscription;

  constructor(private cartService: CartService, private router: Router, private ordersService: OrdersService) { }

  ngOnInit() {
    this.sub = this.cartService.getCart().subscribe((items) => {
      this.setData(items);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRemoveClicked(item: CartItemModel): void {
    this.cartService.removePositionFromCart(item).subscribe((items) => {
        this.setData(items);
      }
    );
  }

  onIncreaseClicked(item: CartItemModel): void {
    this.cartService.increaseQuantity(item).subscribe((items) => {
        this.setData(items);
      }
    );
  }

  onDecreaseClicked(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item).subscribe((items) => {
        this.setData(items);
      }
    );
  }

  onOrderClicked(): void {
    this.ordersService.create(this.cartItems);
    this.cartService.removeAll();
    const link = ['/orders/new'];
    this.router.navigate(link);
  }

  private setData(items: CartItemModel[]): void {
    this.cartItems = [...items];
    this.sum = this.cartService.calculateTotalPrice(this.cartItems);
    this.count = this.cartService.calculateTotalCount(this.cartItems);
  }
}
