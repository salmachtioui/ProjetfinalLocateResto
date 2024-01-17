import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Zone} from "../Zone";
import {ZoneService} from "../Zone.service";
import {Ville} from "../../Ville/Ville";
import {VilleService} from "../../Ville/Ville.service";



@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-zone.component.html',
  styleUrls: ['./create-zone.component.css']
})
export class CreateZoneComponent implements OnInit {
  zones :Zone[];
  villes:Ville[];
  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }

  zone: Zone = new Zone();
  constructor(private zoneservice: ZoneService,private villeservice: VilleService,private router: Router) {
  }
  slectedCostDuration: string = '';
  cost: string = '';
  id: number;

  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;

  }


  ngOnInit(): void {
   this.getZones();
  this.getVilles();
}
private getVilles(){
  this.villeservice.getVilleList().subscribe(data => {
    this.villes = data;
  });
}
  private getZones(){
    this.zoneservice.getZoneList().subscribe(data => {
      this.zones = data;
    });
  }

  saveZones(){
    this.zoneservice.createZone(this.zone).subscribe( data =>{
      console.log(this.zoneservice);
      this.goToZoneList();
    },
    error => console.log(error));
  }

  goToZoneList(){
    this.router.navigate(['/Zone']);
  }

  onSubmit(){
    console.log(this.zone);
    this.saveZones();
  }

  //onChange(event: any) {
    //this.cost = event.target.value;
    //this.vehicleUseService.getVehicleUseByname(this.cost).subscribe(data => {
     // this.getVehiclesUse();
      // document.getElementById('disability')?.setAttribute('value',this.vehiclesUse1.disability)
     // document.getElementById('disability')?.setAttribute('value', this.vehiclesUse1.disability)
      //this.vehiclesUse1=data;
      //console.log(this.vehiclesUse1.disability.toString());


    //})
    //console.log(this.cost)

 // }
}
