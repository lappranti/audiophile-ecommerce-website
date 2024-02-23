import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: any;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}

  dernierMot(chaine: string) {
    const mots = chaine.split('-');
    return mots[chaine.split('-').length - 1];
  }

  // Modifiez la fonction pour la redirection
  redirectToProductDetail(productSlug: string) {
    // Utilisez le service Router pour générer le lien et naviguer vers la page du produit détaillé
    this.router.navigate(['/', this.dernierMot(productSlug), productSlug], {
      relativeTo: this.route,
    });
  }
}
