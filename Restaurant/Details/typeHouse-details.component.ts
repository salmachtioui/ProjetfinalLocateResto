import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {RestaurantService} from "../Restaurant.service";
import {Restaurant} from "../Restaurant";

@Component({
  selector: 'app-typeHouse-details',
  templateUrl: './typeHouse-details.component.html',
  styleUrls: ['./typeHouse-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  id: number
  restaurant: Restaurant
  constructor(private route: ActivatedRoute, private restaurantservice: RestaurantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.restaurant = new Restaurant();
    this.restaurantservice.getRestaurantById(this.id).subscribe( data => {
      this.restaurant = data;
      console.log( this.restaurant);
    });
  }

}
