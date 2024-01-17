import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Ville} from "../Ville";
import {VilleService} from "../Ville.service";


@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent implements OnInit {
  villes :Ville[];
  id: number;
  ville: Ville = new Ville();
  constructor(private villeservice: VilleService,
    private route: ActivatedRoute,
    private router: Router) { }
  slectedCostDuration: string = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.villeservice.getVilleById(this.id).subscribe(data => {
      this.ville = data;
    }, error => console.log(error));
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;
  }

  private getVilles(){
    this.villeservice.getVilleList().subscribe(data => {
      this.villes = data;
    });
  }
  onSubmit(){
    this.villeservice.updateVille(this.id, this.ville).subscribe( data =>{
      this.goToVilleList();
    }
    , error => console.log(error));
  }

  goToVilleList(){
    this.router.navigate(['/Ville']);
  }
}
