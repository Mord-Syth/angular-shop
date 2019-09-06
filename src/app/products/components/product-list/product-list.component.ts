import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Promise<ProductModel[]>;
  constructor(private productService: ProductsService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.books = this.productService.getBooks();
  }

  onAddedToCart(product: ProductModel): void {
    this.cartService.addToCart(product);
  }

  onViewMoreClicked(product: ProductModel): void {
    const link = ['/products-list', product.productId];
    this.router.navigate(link);
  }
}
