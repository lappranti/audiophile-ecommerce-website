import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  linkList: any[] = [
    {
      path: 'home',
      label: 'home',
      icon: 'home',
      color: '#726CEE',
    },
    {
      path: 'headphones',
      label: 'headphones',
      icon: 'headset',
      color: '#4BB1DA',
    },
    {
      path: 'speaker',
      label: 'speaker',
      icon: 'speaker',
      color: '#EDD556',
    },
    {
      path: 'earphones',
      label: 'earphones',
      icon: 'hearing',
      color: '#8E4CB6',
    },
  ];

  currentLang!: string;

  cartList: Cart[] = [];
  nbrArticle: number = 1;
  totalPriceItem: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private langService: TranslationService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((resp) => {
      this.cartList = resp;
      this.caculTotalPriceItem();
    });

    this.currentLang = this.langService.getUserLanguage();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  addProduct(product: any) {
    product.nbr = product.nbr + 1;
    this.cartService.updateCart(product);
  }
  removeProduct(product: any) {
    if (product.nbr == 1) {
      product.nbr = product.nbr - 1;
      this.cartService.removeFromCart(product);
    } else if (product.nbr > 1) {
      product.nbr = product.nbr - 1;
      this.cartService.updateCart(product);
    }
  }

  caculTotalPriceItem() {
    this.totalPriceItem = 0;
    for (let prod of this.cartList) {
      this.totalPriceItem = prod.price * prod.nbr + this.totalPriceItem;
    }
  }

  showCartModal: boolean = false;
  showModal: boolean = false;

  toggleMenuMobile() {
    this.showModal = !this.showModal;
  }

  toggleCartModal() {
    this.showCartModal = !this.showCartModal;
  }

  switchLanguage(language: string) {
    this.currentLang = language;
    this.langService.setUserLanguage(language);
  }

  @ViewChild('modalContent') modalContent!: ElementRef;
  @ViewChild('toggleMenuButton') toggleMenuButton!: ElementRef;

  @ViewChild('modalCartContent') modalCartContent!: ElementRef;
  @ViewChild('toggleCartButton') toggleCartButton!: ElementRef;

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.showModal) {
      this.handleSidebarClickOutside(event);
    }

    if (this.showCartModal) {
      this.handleCartClickOutside(event);
    }
  }

  handleSidebarClickOutside(event: Event) {
    if (
      !this.modalContent.nativeElement.contains(event.target) &&
      !this.toggleMenuButton.nativeElement.contains(event.target)
    ) {
      this.showModal = false;
    }
  }

  handleCartClickOutside(event: Event) {
    if (
      !this.modalCartContent.nativeElement.contains(event.target) &&
      !this.toggleCartButton.nativeElement.contains(event.target)
    ) {
      this.showCartModal = false;
    }
  }

  gotoHome() {
    this.router.navigate(['home']);
  }
}
