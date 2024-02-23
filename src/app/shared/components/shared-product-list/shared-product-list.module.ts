import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedProductListComponent } from './shared-product-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerModule } from '../banner/banner.module';
import { HorizontalCardModule } from '../horizontal-card/horizontal-card.module';
import { CategoriesModule } from '../categories/categories.module';
import { AudioGearModule } from '../audio-gear/audio-gear.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SharedProductListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BannerModule,
    HorizontalCardModule,
    CategoriesModule,
    AudioGearModule,
    TranslateModule,
  ],
  exports: [SharedProductListComponent],
})
export class SharedProductListModule {}
