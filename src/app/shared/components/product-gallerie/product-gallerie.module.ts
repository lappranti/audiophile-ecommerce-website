import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGallerieComponent } from './product-gallerie.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductGallerieComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [ProductGallerieComponent],
})
export class ProductGallerieModule {}
