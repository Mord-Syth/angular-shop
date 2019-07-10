import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductModel } from '../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ProductModel[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cart;
  }

  onRemoveClicked(item: ProductModel): void {
    this.cartService.removeFromCart(item);
  }
}
