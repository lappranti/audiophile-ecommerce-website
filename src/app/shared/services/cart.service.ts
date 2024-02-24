import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'myEcommerceCart';
  private cartList: Cart[] = [];
  private cartSubject = new BehaviorSubject<Cart[]>(this.cartList);

  constructor() {
    // Vérifier si la clé du panier existe dans le stockage local
    const storedCart = localStorage.getItem(this.cartKey);
    if (storedCart) {
      // La clé existe, récupérer les données du panier depuis le stockage local
      this.cartList = JSON.parse(storedCart);
    }
    //Sinon utiliser le tableau de cart vide pour initilaliser les données
    this.updateLocalStorage();
  }

  getCartObservable(): Observable<Cart[]> {
    return this.cartSubject.asObservable();
  }

  updateCart(cart: Cart) {
    // Identifier l'index de l'élément à modifier
    const index = this.cartList.findIndex((item) => item.id === cart.id);
    // Si l'élément existe dans le tableau
    if (index !== -1) {
      // Mettre à jour l'élément dans cartList
      this.cartList = this.cartList.map((item) => {
        if (item.id === cart.id) {
          return cart; // Remplacer l'élément existant par le nouvel élément
        } else {
          return item; // Ne rien changer pour les autres éléments
        }
      });
      this.updateLocalStorage();
    }
  }

  addToCart(item: Cart): void {
    const existingItem = this.cartList.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      this.updateCart(item);
    } else {
      this.cartList.push(item);
      this.updateLocalStorage();
    }
  }

  removeFromCart(item: Cart): void {
    const index = this.cartList.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      this.cartList.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  clearCart(): void {
    this.cartList = [];
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    // Mettre à jour le stockage local avec le contenu du panier
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartList));
    // Émettre une notification de changement
    this.cartSubject.next(this.cartList);
  }
}
