import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ZoneService} from "../Zone.service";
import {Zone} from "../Zone";
import {Ville} from "../../Ville/Ville";
import {VilleService} from "../../Ville/Ville.service";

@Component({
  selector: 'app-insurance-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})

export class ZoneListComponent implements OnInit {
    zones: Zone[];
    villes:Ville[];
  constructor(private zoneservice: ZoneService,private villeservice:VilleService,
    private router: Router) { }
  searchText = '';

  ngOnInit(): void {
    this.getZones();
    this.getVilles();
  }
private getVilles(){
    this.villeservice.getVilleList();
}
  private getZones(){
    this.zoneservice.getZoneList().subscribe(data => {
      this.zones = data;
    });
  }

  villeDetails(id: number){
    this.router.navigate(['insurance-details', id]);
  }

  updateZone(id: number){
    this.router.navigate(['UpdateZone', id]);
  }
  confirmationVille(id: number){
    this.router.navigate(['pay-insurance', id]);
  }
  payInsurance(id: number){
    this.router.navigate(['pay-insurance', id]);
  }
  deleteZone(id: number){
    this.zoneservice.deleteZone(id).subscribe( data => {
      console.log(data);
      this.getZones();
    })
  }
}
