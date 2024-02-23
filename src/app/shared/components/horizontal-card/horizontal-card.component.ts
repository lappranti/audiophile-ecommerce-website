import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss'],
})
export class HorizontalCardComponent {
  @Input() data!: any;
}
