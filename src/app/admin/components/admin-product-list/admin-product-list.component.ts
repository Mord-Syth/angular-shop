import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../products/models/product.model';
import { ProductsService } from '../../../products/services';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  books: Promise<ProductModel[]>;

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.books = this.productService.getBooks();
  }
  onAddClicked() {
    const link = ['admin/product/add'];
    this.router.navigate(link);
  }

  onEditClicked(product: ProductModel): void {
    const link = ['admin/product/edit', product.productId];
    this.router.navigate(link);
  }
}
