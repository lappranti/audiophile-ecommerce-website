import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardHorizontalComponent } from './product-card-horizontal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProductCardHorizontalComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule, TranslateModule],
  exports: [ProductCardHorizontalComponent],
})
export class ProductCardHorizontalModule {}
