import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shared-product',
  templateUrl: './shared-product.component.html',
  styleUrls: ['./shared-product.component.scss'],
})
export class SharedProductComponent implements OnInit {
  productId: string | null = '';
  product!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ProductsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('productId');
      if (this.productId) {
        this.api.getProductById(this.productId).subscribe((resp) => {
          this.product = resp;
        });
      }
    });
  }

  goBack() {
    window.history.back();
  }

  dernierMot(chaine: string) {
    const mots = chaine.split('-');
    return mots[chaine.split('-').length - 1];
  }
}
