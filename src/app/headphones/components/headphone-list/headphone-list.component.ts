import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-headphone-list',
  templateUrl: './headphone-list.component.html',
  styleUrls: ['./headphone-list.component.scss'],
})
export class HeadphoneListComponent implements OnInit {
  productList!: any;
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getAllProduct('headphones').subscribe((resp) => {
      this.productList = resp;
    });
  }
}
