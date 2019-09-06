import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewsService } from '../../services';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  review = '';
  constructor(
    public reviewsService: ReviewsService,
    private router: Router) { }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate([{ outlets: { reviews: null } }]);
    this.reviewsService.isDisplayed = false;
  }

  onSend() {
    if (this.review) {
      this.reviewsService.addReviews(this.review);
      this.review = '';
    }
  }
}
