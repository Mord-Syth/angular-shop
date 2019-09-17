import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from '../../products/services';
import { ProductModel } from '../../products/models/product.model';
import { Category } from '../../common/enums/category';

@Injectable({
  providedIn: 'root'
})

export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<ProductModel> | null {

    if (!route.paramMap.has('id')) {
      return Promise.resolve(new ProductModel(null, '', '', 0, Category.Fantasy, true));
    }

    const id = +route.paramMap.get('id');

    return this.productsService.getBookById(id).then(product => {
      if (product) {
        return product;
      } else {
        this.router.navigate(['/admin/products']);
        return null;
      }
    });
  }
}

