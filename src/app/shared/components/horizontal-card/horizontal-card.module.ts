import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from './horizontal-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HorizontalCardComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, TranslateModule],
  exports: [HorizontalCardComponent],
})
export class HorizontalCardModule {}
