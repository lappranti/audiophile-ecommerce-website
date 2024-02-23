import { Component, Input } from '@angular/core';
import { card } from './card-type';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss'],
})
export class CardShopComponent {
  @Input() card!: card;
}
