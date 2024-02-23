import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shared-product-list',
  templateUrl: './shared-product-list.component.html',
  styleUrls: ['./shared-product-list.component.scss'],
})
export class SharedProductListComponent {
  @Input() productList: any;
}
