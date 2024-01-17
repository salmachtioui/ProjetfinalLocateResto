import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Restaurant} from "../Restaurant";
import {RestaurantService} from "../Restaurant.service";


@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  restaurants :Restaurant[];
  id: number;
  restaurant: Restaurant = new Restaurant();
  constructor(private restaurantservice: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }
  slectedCostDuration: string = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.restaurantservice.getRestaurantById(this.id).subscribe(data => {
      this.restaurant = data;
    }, error => console.log(error));
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;
  }

  private getRestaurant(){
    this.restaurantservice.getRestaurantList().subscribe(data => {
      this.restaurants = data;
    });
  }
  onSubmit(){
    this.restaurantservice.updateRestaurant(this.id, this.restaurant).subscribe( data =>{
      this.goToRestaurantList();
    }
    , error => console.log(error));
  }

  goToRestaurantList(){
    this.router.navigate(['/Restaurant']);
  }
}
