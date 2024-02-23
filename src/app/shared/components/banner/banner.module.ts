import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, FlexLayoutModule, TranslateModule],
  exports: [BannerComponent],
})
export class BannerModule {}
