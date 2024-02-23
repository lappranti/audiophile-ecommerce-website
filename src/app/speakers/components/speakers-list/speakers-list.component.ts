import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss'],
})
export class SpeakersListComponent implements OnInit {
  productList!: any;

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getAllProduct('speakers').subscribe((resp) => {
      this.productList = resp;
    });
  }
}
