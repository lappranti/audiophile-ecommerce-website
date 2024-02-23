import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../shared/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutModalComponent } from './components/checkout-modal/checkout-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  isPayementByCash: boolean = true;
  cartList!: Cart[];

  form!: FormGroup;
  totalPriceItem!: number;
  grandTotal!: number;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((resp) => {
      this.cartList = resp;
      this.caculTotalPriceItem();
      this.grandTotal = this.totalPriceItem + 50 + 35;
    });

    this.initForm();
    this.initPayementMethode();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      zipCode: [''],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      paymentMethod: ['e-Money', [Validators.required]],
      eNumber: ['', [Validators.required]],
      ePin: ['', [Validators.required]],
    });
  }

  initPayementMethode() {
    this.form.get('paymentMethod')?.valueChanges.subscribe((value) => {
      if (value === 'cash') {
        this.form.get('eNumber')?.clearValidators(); // Supprimer les validateurs
        this.form.get('ePin')?.clearValidators(); // Supprimer les validateurs
        this.form.get('eNumber')?.reset(); // Réinitialiser la valeur
        this.form.get('ePin')?.reset(); // Réinitialiser la valeur
        this.form.get('eNumber')?.disable(); // Désactiver le champ
        this.form.get('ePin')?.disable(); // Désactiver le champ
      } else {
        this.form.get('eNumber')?.setValidators([Validators.required]); // Ajouter les validateurs
        this.form.get('ePin')?.setValidators([Validators.required]); // Ajouter les validateurs
        this.form.get('eNumber')?.enable(); // Activer le champ
        this.form.get('ePin')?.enable(); // Activer le champ
      }

      this.form.get('eNumber')?.updateValueAndValidity();
      this.form.get('ePin')?.updateValueAndValidity();
    });
  }

  caculTotalPriceItem() {
    this.totalPriceItem = 0;
    for (let prod of this.cartList) {
      this.totalPriceItem = prod.price * prod.nbr + this.totalPriceItem;
    }
  }

  get paymentMethod() {
    return this.form.get('paymentMethod');
  }

  goBack() {
    window.history.back();
  }

  payementChoice(bool: boolean) {
    this.isPayementByCash = bool;
  }

  onSubmit() {
    if (this.form.valid) {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckoutModalComponent, {
      data: {
        prod: this.cartList[0],
        gT: this.grandTotal,
        nbr: this.cartList.length - 1,
      },
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.cartService.clearCart();
      this.router.navigateByUrl('/home');
    });
  }
}
