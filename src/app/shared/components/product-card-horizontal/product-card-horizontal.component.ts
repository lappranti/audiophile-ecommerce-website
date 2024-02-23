import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-product-card-horizontal',
  templateUrl: './product-card-horizontal.component.html',
  styleUrls: ['./product-card-horizontal.component.scss'],
})
export class ProductCardHorizontalComponent {
  nbrArticle: number = 1;
  @Input() data!: any;

  constructor(private cart: CartService) {}

  addProduct() {
    if (this.nbrArticle < 10) {
      this.nbrArticle += 1;
    }
  }
  removeProduct() {
    if (this.nbrArticle > 1) {
      this.nbrArticle -= 1;
    }
  }

  addToCart() {
    const toCart: Cart = {
      id: this.data.slug,
      img: this.data.image.mobile,
      name: this.data.name,
      price: this.data.price,
      nbr: this.nbrArticle,
    };

    this.cart.addToCart(toCart);
  }
}
