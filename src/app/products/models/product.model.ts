import {Category} from '../../common/enums/category';

export interface Product {
  id?: number;
  name?: string;
  author?: string;
  price?: number;
  category?: Category;
  isAvailable?: boolean;
}

export class ProductModel implements Product {

  constructor(
    public id: number = null,
    public name: string = '',
    public author: string = '',
    public price: number = 0,
    public category: Category.Fantasy,
    public isAvailable: boolean
  ) {
    this.isAvailable = isAvailable || true;
  }
}
