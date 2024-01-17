import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Restaurant} from "../Restaurant";
import {RestaurantService} from "../Restaurant.service";
import {Serie} from "../../Serie/Serie";
import {Zone} from "../../Zone/Zone";
import {ZoneService} from "../../Zone/Zone.service";
import {VilleService} from "../../Ville/Ville.service";
import {SerieService} from "../../Serie/Serie.service";


@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  restaurants :Restaurant[];
  zones:Zone[];
  series:Serie[];
  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }

  restaurant: Restaurant = new Restaurant();
  constructor(private restaurantservice: RestaurantService,private serieservice: SerieService ,private zoneservice : ZoneService ,private router: Router) {
  }
  slectedCostDuration: string = '';
  cost: string = '';
  id: number;

  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;

  }


  ngOnInit(): void {
    this.getRestaurants();
    this.getSeries();
    this.getZones();
  }
  private getSeries(){
    this.serieservice.getSerieList().subscribe(data => {
      this.series = data;
    });
  }
  private getZones(){
    this.zoneservice.getZoneList().subscribe(data => {
      this.zones = data;
    });
  }
  private getRestaurants(){
    this.restaurantservice.getRestaurantList().subscribe(data => {
      this.restaurants = data;
    });
  }

  saveRestaurants(){
    this.restaurantservice.createRestaurant(this.restaurant).subscribe( data =>{
          console.log(this.restaurantservice);
          this.goToRestaurantList();
        },
        error => console.log(error));
  }

  goToRestaurantList(){
    this.router.navigate(['/Restaurant']);
  }

  onSubmit(){
    console.log(this.restaurant);
    this.saveRestaurants();
  }

  
}
