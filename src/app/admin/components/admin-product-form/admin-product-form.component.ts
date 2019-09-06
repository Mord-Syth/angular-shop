import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductsService } from '../../../products/services';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  product: ProductModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel();

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return params.get('productId')
            ? this.productsService.getBookById(+params.get('productId'))
            : Promise.resolve(null);
        }))
      .subscribe(product => (this.product = { ...product }), err => console.log(err));
  }

  onSaveProduct() {
    const method = this.product.productId ? 'updateBook' : 'addBook';
    this.productsService[method](this.product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
