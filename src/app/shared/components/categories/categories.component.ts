import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  cardShopList: any[] = [
    {
      image:
        '../../../../assets/shared/desktop/image-category-thumbnail-headphones.png',
      title: 'headphones',
    },
    {
      image:
        '../../../../assets/shared/desktop/image-category-thumbnail-speakers.png',
      title: 'speaker',
    },
    {
      image:
        '../../../../assets/shared/desktop/image-category-thumbnail-earphones.png',
      title: 'earphones',
    },
  ];
}
