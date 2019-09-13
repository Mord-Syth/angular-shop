import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ProductModel } from '../../models/product.model';
import { ProductsService, ReviewsService } from '../../services';

@Component({
  selector: 'app-extended-product',
  templateUrl: './extended-product.component.html',
  styleUrls: ['./extended-product.component.css']
})
export class ExtendedProductComponent implements OnInit {

  product: ProductModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private reviewsService: ReviewsService) { }

  ngOnInit() {
    this.product = new ProductModel();

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return params.get('id')
            ? this.productsService.getBookById(+params.get('id'))
            : Promise.resolve(null);
        }))
      .subscribe(product => (this.product = { ...product }), err => console.log(err));
  }

  onReviewsClicked() {
    this.router.navigate([{ outlets: { reviews: ['reviews'] } }]);
    this.reviewsService.isDisplayed = true;
  }

}
