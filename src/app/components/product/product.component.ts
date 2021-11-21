import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  images: Array<string>;
  image: string;
  amount: number = 0;

  constructor() {
    this.images = [
      '../../../assets/images/image-product-1.jpg',
      '../../../assets/images/image-product-2.jpg',
      '../../../assets/images/image-product-3.jpg',
      '../../../assets/images/image-product-4.jpg',
    ];
    this.image ='../../../assets/images/image-product-1.jpg';
  }

  ngOnInit(): void {
  }

  changePicture(i:number) {
    this.image = this.images[i];

  }

  plus() {
    this.amount++;
  }

  minus() {
    if(this.amount > 0){
      this.amount--;
    }

  }

}
