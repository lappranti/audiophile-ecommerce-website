import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardShopComponent } from './card-shop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CardShopComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule, TranslateModule],
  exports: [CardShopComponent],
})
export class CardShopModule {}
