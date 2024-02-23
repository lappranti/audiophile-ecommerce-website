import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioGearComponent } from './audio-gear.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AudioGearComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule, TranslateModule],
  exports: [AudioGearComponent],
})
export class AudioGearModule {}
