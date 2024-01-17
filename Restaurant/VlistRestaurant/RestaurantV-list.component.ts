import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Restaurant} from "../Restaurant";
import {RestaurantService} from "../Restaurant.service";



@Component({
  selector: 'app-insurance-list',
  templateUrl: './restaurantV-list.component.html',
  styleUrls: ['./restaurantV-list.component.css']
})

export class RestaurantVListComponent implements OnInit {


  restaurants1: Restaurant[];

  constructor(private restaurantService: RestaurantService,
              private router: Router) { }
  searchText = '';

  ngOnInit(): void {
    this.getRestaurants();
  }

  private getRestaurants(){
    this.restaurantService.getRestaurantList().subscribe(data => {
      this.restaurants1 = data;
    });
  }

  restaurantDetails(id: number){
    this.router.navigate(['specialite-details', id]);
  }

  updateRestaurant(id: number){
    this.router.navigate(['updateRestarant', id]);
  }


  deleteRestaurant(id: number){
    this.restaurantService.deleteRestaurant(id).subscribe( data => {
      console.log(data);
      this.getRestaurants();
    })
  }
}
