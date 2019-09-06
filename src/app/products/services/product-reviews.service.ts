import { Injectable } from '@angular/core';
import { ProductsServicesModule } from '../products.services.module';

@Injectable({
  providedIn: ProductsServicesModule
})
export class ReviewsService {
  isDisplayed = false;

  private reviews: string[] = [];

  addReviews(review: string): void {
    const currentDate = new Date();
    this.reviews.unshift(`${review} at ${currentDate.toLocaleString()}`);
  }

  getReviews(): Array<string> {
    return this.reviews;
  }
}
