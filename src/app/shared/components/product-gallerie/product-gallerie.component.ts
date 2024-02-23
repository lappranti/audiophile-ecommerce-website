import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gallerie',
  templateUrl: './product-gallerie.component.html',
  styleUrls: ['./product-gallerie.component.scss'],
})
export class ProductGallerieComponent implements OnInit {
  @Input() data!: any;

  ngOnInit(): void {
    // console.log(this.data);
  }
}
