import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopComponent } from './scroll-top.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ScrollTopComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [ScrollTopComponent],
})
export class ScrollTopModule {}
