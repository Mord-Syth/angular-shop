import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel, Product } from '../../models/product.model';
import { ReviewsService } from '../../services';
import { Category } from '../../../common/enums/category';
import { AppState, selectSelectedProductByUrl } from '../../../core/@ngrx';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-extended-product',
  templateUrl: './extended-product.component.html',
  styleUrls: ['./extended-product.component.css']
})
// Может быть назвать ProductDetailsComponent
export class ExtendedProductComponent implements OnInit, OnDestroy {
  product: Product;
  private sub: Subscription;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private reviewsService: ReviewsService
  ) {}

  ngOnInit() {
    this.product = new ProductModel(null, '', '', 0, Category.Fantasy, true);
    this.sub = this.store
      .pipe(select(selectSelectedProductByUrl))
      .subscribe(product => (this.product = { ...product }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onReviewsClicked() {
    // this.router.navigate([{ outlets: { reviews: ['reviews'] } }]);
    this.router.navigateByUrl(
      `/products-list/${this.product.id}/(reviews:reviews)`
    );
    this.reviewsService.isDisplayed = true;
  }
}
