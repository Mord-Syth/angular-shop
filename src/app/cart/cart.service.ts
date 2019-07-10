import { Injectable } from '@angular/core';
import { ProductModel } from '../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: ProductModel[] = [];

  get cart() {
    return this.cartItems;
  }

  constructor() { }

  addToCart(item: ProductModel): void {
    this.cartItems.push(item);
  }

  removeFromCart(item: ProductModel): void {
    const ind = this.cartItems.indexOf(item);
    if (ind > -1) {
      this.cartItems.splice(ind, 1);
    }
  }
}
