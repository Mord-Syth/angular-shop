import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { CartItemModel } from '../models/cartItem.model';
import { ProductModel } from '../../products/models/product.model';
import { CartServicesModule } from '../cart-services.module';


@Injectable({
  providedIn: CartServicesModule
})
export class CartService {

  private cartUrl = 'http://localhost:3000/cartitems';

  constructor(private http: HttpClient) { }

  getCart(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.cartUrl);
  }

  addToCart(item: ProductModel): void {
    this.getItemByProduct(item)
      .subscribe(existingItem => {
        if (existingItem) {
          existingItem.quantity++;
          this.updateCartItem(existingItem)
            .subscribe();
        } else {
          this.createCartItem({
            product: item,
            quantity: 1
          }).subscribe();
        }
      }
      );
  }

  createCartItem(item: CartItemModel): Observable<CartItemModel> {
    const body = JSON.stringify(item);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<CartItemModel>(this.cartUrl, body, options);
  }

  updateCartItem(item: CartItemModel): Observable<CartItemModel> {
    const url = `${this.cartUrl}/${item.id}`;
    const body = JSON.stringify(item);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<CartItemModel>(url, body, options);
  }

  removePositionFromCart(item: CartItemModel): Observable<CartItemModel[]> {
    const url = `${this.cartUrl}/${item.id}`;
    return this.http.delete(url).pipe(
      switchMap(() => this.getCart())
    );
  }

  removeAll(): void {
    this.getCart().subscribe(
      (items: CartItemModel[]) => {
        for (const item of items) {
          const url = `${this.cartUrl}/${item.id}`;
          this.http.delete(url).subscribe();
        }
      }
    );
  }

  getItemByProduct(item: ProductModel): Observable<CartItemModel> {
    return this.getCart().pipe(
      map((cartItems: CartItemModel[]) => {
        return cartItems.find((cartItem: CartItemModel) => cartItem.product.id === item.id);
      })
    );
  }

  increaseQuantity(item: CartItemModel): Observable<CartItemModel[]> {
    item.quantity++;
    return this.updateCartItem(item).pipe(
      switchMap(() => this.getCart())
    );
  }

  decreaseQuantity(item: CartItemModel): Observable<CartItemModel[]> {
    if (item.quantity === 1) {
      return this.removePositionFromCart(item);
    } else {
      item.quantity--;
      return this.updateCartItem(item).pipe(
        switchMap(() => this.getCart())
      );
    }
  }

  calculateTotalCount(cartItems: CartItemModel[]): number {
    let count = 0;
    for (const item of cartItems) {
      count += item.quantity;
    }
    return count;
  }

  calculateTotalPrice(cartItems: CartItemModel[]): number {
    let sum = 0;
    for (const item of cartItems) {
      sum += item.product.price * item.quantity;
    }
    return sum;
  }
}
