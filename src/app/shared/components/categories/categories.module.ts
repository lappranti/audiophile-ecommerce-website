import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CardShopModule } from '../card-shop/card-shop.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    CardShopModule,
    RouterModule,
  ],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
