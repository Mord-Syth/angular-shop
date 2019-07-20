import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: ProductModel[];
  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.books = this.productService.getBooks();
  }

  onAddedToCart(product: ProductModel): void {
    this.cartService.addToCart(product);
  }
}
