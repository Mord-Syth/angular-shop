import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItemModel } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItemModel;
  @Output() remove: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() increase: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() decrease: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  constructor() { }

  ngOnInit() {
  }

  onRemoved(): void {
    this.remove.emit(this.item);
  }

  onIncreaseClicked(): void {
    this.increase.emit(this.item);
  }

  onDecreaseClicked(): void {
    this.decrease.emit(this.item);
  }
}
