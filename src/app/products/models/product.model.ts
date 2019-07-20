import {Category} from '../../common/enums/category';

export class ProductModel {
  productId: number;
  name: string;
  author: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
