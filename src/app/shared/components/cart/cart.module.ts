import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule, RouterModule],
  exports: [CartComponent],
})
export class CartModule {}
