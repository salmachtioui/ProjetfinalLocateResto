import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Ville} from "../Ville";
import {VilleService} from "../Ville.service";


@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-ville.component.html',
  styleUrls: ['./create-ville.component.css']
})
export class CreateVilleComponent implements OnInit {
  villes :Ville[];

  ReadMore:boolean = true

  
  visible:boolean = false


  
  onclick()
  {
    this.ReadMore = !this.ReadMore; 
    this.visible = !this.visible
  }

  ville: Ville = new Ville();
  constructor(private villeservice: VilleService,private router: Router) {
  }
  slectedCostDuration: string = '';
  cost: string = '';
  id: number;

  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;

  }


  ngOnInit(): void {
   this.getVilles();
  }

  private getVilles(){
    this.villeservice.getVilleList().subscribe(data => {
      this.villes = data;
    });
  }

  saveVilles(){
    this.villeservice.createVille(this.ville).subscribe( data =>{
      console.log(this.villeservice);
      this.goToVilleList();
    },
    error => console.log(error));
  }

  goToVilleList(){
    this.router.navigate(['/Ville']);
  }

  onSubmit(){
    console.log(this.ville);
    this.saveVilles();
  }

  
}
