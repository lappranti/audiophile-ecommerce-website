import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-earphone-list',
  templateUrl: './earphone-list.component.html',
  styleUrls: ['./earphone-list.component.scss'],
})
export class EarphoneListComponent implements OnInit {
  productList!: any;
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getAllProduct('earphones').subscribe((resp) => {
      this.productList = resp;
    });
  }
}
