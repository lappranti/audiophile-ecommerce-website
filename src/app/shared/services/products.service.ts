import { Injectable } from '@angular/core';
import { products } from '../data/mock-products';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any = products;
  constructor() {}

  getAllProduct(category: string) {
    const list = this.products.filter(
      (product: { category: string }) => product.category === category
    );
    return of(list);
  }

  getProductById(id: string) {
    const product = this.products.find(
      (el: { slug: string }) => el.slug === id
    );
    return of(product);
  }
}
