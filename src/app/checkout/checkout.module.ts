import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutModalComponent } from './components/checkout-modal/checkout-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CheckoutComponent, CheckoutModalComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    TranslateModule,
  ],
})
export class CheckoutModule {}
