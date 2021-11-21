import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CartService]
})


export class ProductComponent implements OnInit {

  public amount = 0;
  image: string;
  images: Array<string>;
  price: number;
  public total:number;


  constructor(
    private cartService: CartService
  ) {
    this.image = '';
    this.images = [];
    this.price = 125;
    this.total = 0;
  }

  ngOnInit(): void {

    this.image = this.cartService.image;
    this.images = this.cartService.images;

  }
  plus() {
    this.amount++;
  }

  minus() {
    if (this.amount > 0) {
      this.amount--;
    }
  }

  changePicture(i: number): string {
    return this.image = this.images[i];
  }

  addToCart(amount:number){

    this.total = this.amount * this.price;
    console.log(this.total, amount)
  }


}
