import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedProductComponent } from './shared-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductCardHorizontalModule } from '../product-card-horizontal/product-card-horizontal.module';
import { ProductDetailsModule } from '../product-details/product-details.module';
import { ProductGallerieModule } from '../product-gallerie/product-gallerie.module';
import { ProductCardModule } from '../product-card/product-card.module';
import { CategoriesModule } from '../categories/categories.module';
import { AudioGearModule } from '../audio-gear/audio-gear.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SharedProductComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ProductCardHorizontalModule,
    ProductDetailsModule,
    ProductGallerieModule,
    ProductCardModule,
    CategoriesModule,
    AudioGearModule,
    TranslateModule,
  ],
  exports: [SharedProductComponent],
})
export class SharedProductModule {}
