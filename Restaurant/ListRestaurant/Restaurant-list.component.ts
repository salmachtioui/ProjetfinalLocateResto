import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Restaurant} from "../Restaurant";
import {RestaurantService} from "../Restaurant.service";


@Component({
  selector: 'app-insurance-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})

export class RestaurantListComponent implements OnInit {


  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService,
    private router: Router) { }
  searchText = '';

  ngOnInit(): void {
    this.getRestaurants();
  }

  private getRestaurants(){
    this.restaurantService.getRestaurantValidList().subscribe(data => {
      this.restaurants = data;
    });
  }

  restaurantDetails(id: number){
    this.router.navigate(['Details', id]);
  }

  updateRestaurant(id: number,restaurant:Restaurant){
    this.router.navigate(['UpdateRestarant', id]);
  }


  deleteRestaurant(id: number){
    this.restaurantService.deleteRestaurant(id).subscribe( data => {
      console.log(data);
      this.getRestaurants();
    })
  }
}
