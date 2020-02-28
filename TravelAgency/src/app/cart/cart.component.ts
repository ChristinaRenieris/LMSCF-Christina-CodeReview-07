import { Component, OnInit } from '@angular/core';
import {CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
tours;
total: number = 0
  constructor(private CartService: CartService) { }

  removeItem(i){
    this.tours.splice(i,1);
  }
  clearCart(){
    this.tours= [];
    return this.tours;
  };
    addMore(tour){
      tour.amount ++;
  
    }
    addLess(tour,i){
      if (tour.amount ==1){
        tour.amount --;
        this.tours.splice(i,1)
        return this.tours;
      }else {
        tour.amount --;
        return this.tours;
      }
    }
    calcTotal() {
      let total = 0;
      for(let item of this.tours){
        total = total + (item.amount * item.price);
      }
  
      return total;
    }
  ngOnInit(): void {
    this.tours = this.CartService.getItems();
  }

}
