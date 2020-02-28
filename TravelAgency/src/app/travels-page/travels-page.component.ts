import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { tours } from '../tours';

@Component({
  selector: 'app-travels-page',
  templateUrl: './travels-page.component.html',
  styleUrls: ['./travels-page.component.css']
})
export class TravelsPageComponent implements OnInit {
tours = tours;
tour;
  constructor(private CartService: CartService) {}
    addToCart(tour) {
      window.alert("Your tour has been added to the Cart");
      this.CartService.addtoCart(tour);
    }
  

  ngOnInit(): void {
  }

  submitAlert() {
    alert("Thank you for contacting us!");
  };
}
