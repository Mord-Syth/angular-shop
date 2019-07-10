import { Component, OnInit } from '@angular/core';
import { Category } from '../../../common/enums/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string;
  author: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Book';
    this.author = 'Author';
    this.price = 200;
    this.category = Category.Science;
    this.isAvailable = true;
  }

  onAddedToCart(): void {
    if (this.isAvailable) {
      console.log(`${this.name} was added to cart`);
    }
  }
}
