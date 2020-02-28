import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
tours = [];
  constructor() { }
  addtoCart(tour){
    if(tour.amount == 0){
      tour.amount++;
      this.tours.push(tour);
    }else {
      for(let item of this.tours){
        (tour.destination == tour.destination) ? item.amount++ : null ;
      }
    }

  };

  getItems(){
    return this.tours;
  };
}
