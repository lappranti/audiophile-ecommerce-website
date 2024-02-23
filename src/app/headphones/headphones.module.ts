import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadphonesComponent } from './headphones.component';
import { HeadphonesRoutingModule } from './headphones-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HeadphoneDetailComponent } from './components/headphone-detail/headphone-detail.component';
import { SharedProductModule } from '../shared/components/shared-product/shared-product.module';
import { HeadphoneListComponent } from './components/headphone-list/headphone-list.component';
import { SharedProductListModule } from '../shared/components/shared-product-list/shared-product-list.module';

@NgModule({
  declarations: [
    HeadphonesComponent,
    HeadphoneDetailComponent,
    HeadphoneListComponent,
  ],
  imports: [
    CommonModule,
    HeadphonesRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    SharedProductModule,
    SharedProductListModule,
  ],
})
export class HeadphonesModule {}
