import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Ville} from "../Ville";
import {VilleService} from "../Ville.service";
@Component({
  selector: 'app-insurance-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})

export class VilleListComponent implements OnInit {

  villes: Ville[];

  constructor(private villeservice: VilleService,
    private router: Router) { }
  searchText = '';

  ngOnInit(): void {
    this.getVilles();
  }

  private getVilles(){
    this.villeservice.getVilleList().subscribe(data => {
      this.villes = data;
    });
  }

  villeDetails(id: number){
    this.router.navigate(['insurance-details', id]);
  }

  updateVille(id: number){
    this.router.navigate(['UpdateVille', id]);
  }
  confirmationVille(id: number){
    this.router.navigate(['pay-insurance', id]);
  }
  payInsurance(id: number){
    this.router.navigate(['pay-insurance', id]);
  }
  deleteVille(id: number){
    this.villeservice.deleteVille(id).subscribe( data => {
      console.log(data);
      this.getVilles();
    })
  }
}
