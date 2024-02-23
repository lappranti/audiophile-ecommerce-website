import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  linkList: any[] = [
    {
      path: 'home',
      label: 'home',
    },
    {
      path: 'headphones',
      label: 'headphones',
    },
    {
      path: 'speaker',
      label: 'speaker',
    },
    {
      path: 'earphones',
      label: 'earphones',
    },
  ];
}
