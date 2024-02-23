import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule, TranslateModule],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
