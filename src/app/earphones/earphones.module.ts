import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarphonesComponent } from './earphones.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { EarphonesRoutingModule } from './earphones-routing.module';
import { EarphoneDetailComponent } from './components/earphone-detail/earphone-detail.component';
import { SharedProductModule } from '../shared/components/shared-product/shared-product.module';
import { SharedProductListModule } from '../shared/components/shared-product-list/shared-product-list.module';
import { EarphoneListComponent } from './components/earphone-list/earphone-list.component';

@NgModule({
  declarations: [
    EarphonesComponent,
    EarphoneDetailComponent,
    EarphoneListComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    EarphonesRoutingModule,
    SharedProductModule,
    SharedProductListModule,
  ],
})
export class EarphonesModule {}
