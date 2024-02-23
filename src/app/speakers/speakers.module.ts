import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { SpeakerDetailComponent } from './components/speaker-detail/speaker-detail.component';
import { SharedProductModule } from '../shared/components/shared-product/shared-product.module';
import { SpeakersListComponent } from './components/speakers-list/speakers-list.component';
import { SharedProductListModule } from '../shared/components/shared-product-list/shared-product-list.module';

@NgModule({
  declarations: [
    SpeakersComponent,
    SpeakerDetailComponent,
    SpeakersListComponent,
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    FlexLayoutModule,
    MatIconModule,

    SharedProductModule,
    SharedProductListModule,
  ],
})
export class SpeakersModule {}
