import { Component, Input, OnChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-product-card-horizontal',
  templateUrl: './product-card-horizontal.component.html',
  styleUrls: ['./product-card-horizontal.component.scss'],
})
export class ProductCardHorizontalComponent implements OnChanges {
  nbrArticle: number = 1;
  @Input() data!: any;

  constructor(private cart: CartService) {}

  ngOnChanges() {
    this.nbrArticle = 1;
  }

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
