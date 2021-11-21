import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
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
    this.image = '../../../assets/images/image-product-1.jpg';
  }

}
