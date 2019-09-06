import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../../common/enums/category';
import { ProductsServicesModule } from '../products.services.module';

@Injectable({
  providedIn: ProductsServicesModule,
})
export class ProductsService {

  private books: ProductModel[] = [
    {
      productId: 1,
      name: 'Game of Thrones',
      author: 'G. Martin',
      category: Category.Fantasy,
      price: 10,
      isAvailable: true
    },
    {
      productId: 2,
      name: 'Dance with the Winds',
      author: 'G. Martin',
      category: Category.Fantasy,
      price: 30,
      isAvailable: true
    }
  ];

  getBooks(): Promise<ProductModel[]> {
    return Promise.resolve(this.books);
  }

  getBookById(id: number): Promise<ProductModel> {
    return this.getBooks().then((books) => {
      return books.find(book => book.productId === id);
    });
  }

  addBook(book: ProductModel): Promise<void> {
    return this.getBooks().then((books) => {
      book.productId = books[books.length - 1].productId++;
      books.push(book);
    });
  }

  updateBook(update: ProductModel): Promise<void> {
    const i = this.books.findIndex(book => book.productId === update.productId);
    if (i > -1) {
      this.books.splice(i, 1, update);
    }
    return Promise.resolve();
  }
}
