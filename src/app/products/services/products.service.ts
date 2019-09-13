import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductModel } from '../models/product.model';
import { ProductsServicesModule } from '../products.services.module';

@Injectable({
  providedIn: ProductsServicesModule,
})
export class ProductsService {

  private booksUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Promise<ProductModel[]> {
    return this.http
      .get(this.booksUrl)
      .toPromise()
      .then(response => <ProductModel[]>response);
  }

  getBookById(id: number): Promise<ProductModel> {
    const url = `${this.booksUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ProductModel);
  }

  addBook(book: ProductModel): Promise<ProductModel> {
    const url = this.booksUrl;
    const body = JSON.stringify(book);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as ProductModel);
  }

  updateBook(update: ProductModel): Promise<ProductModel> {

    const url = `${this.booksUrl}/${update.id}`;
    const body = JSON.stringify(update);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as ProductModel);
  }
}
