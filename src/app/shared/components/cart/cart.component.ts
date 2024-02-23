import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Output() showCart = new EventEmitter();
  cartList: Cart[] = [];
  nbrArticle: number = 1;
  totalPriceItem: number = 0;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    console.log('Cart');

    this.cart.getCartObservable().subscribe((resp) => {
      this.cartList = resp;
      console.log(this.cartList);
    });

    this.caculTotalPriceItem();
  }

  clearCart() {
    this.cart.clearCart();
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

  caculTotalPriceItem() {
    for (let prod of this.cartList) {
      console.log(prod.price);
      this.totalPriceItem = prod.price * prod.nbr + this.totalPriceItem;
    }
  }
}
