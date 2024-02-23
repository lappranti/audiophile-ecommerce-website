import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { CardShopModule } from '../shared/components/card-shop/card-shop.module';
import { AudioGearModule } from '../shared/components/audio-gear/audio-gear.module';
import { CategoriesModule } from '../shared/components/categories/categories.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    CardShopModule,
    AudioGearModule,
    CategoriesModule,

    TranslateModule,
  ],
})
export class HomeModule {}
