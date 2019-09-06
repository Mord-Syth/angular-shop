import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() edit: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  ngOnInit() { }

  onEditClicked(): void {
    this.edit.emit(this.product);
  }

}
