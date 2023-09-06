import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  componentName = 'Cart';
  btnDisabled = true;
  item = '';
  cart: any = [];

  name="sumita";

  constructor() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 2000);
  }
  ngOnInit(): void {}

  // getItem(e: any) {
  //   this.componentName = e.target.value;
  //   this.item = e.target.value;
  //   console.log(e.target);
  // }


  addToCart() {
    this.cart.push({name:this.item, time: new Date()});
    this.item='';
  }
}
