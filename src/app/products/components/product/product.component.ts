import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() viewMore: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  ngOnInit() { }

  onAddedToCart(): void {
    this.addToCart.emit(this.product);
  }

  onViewMoreClicked(): void {
    this.viewMore.emit(this.product);
  }
}
