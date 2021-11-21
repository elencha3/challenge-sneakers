import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit {

  @Input() amount: number;
  @Input() totalPrice: number;
  constructor() {

    this.amount = 0;
    this.totalPrice = 125;
  }

  ngOnInit(): void {
  }

}
