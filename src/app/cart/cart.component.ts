import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  componentName = 'cart';
  btnDisabled = true;
  constructor() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 2000);
  }
}
getItem(e:any){
  this.componentName = e.target.value;
  console.log(e.target);
}