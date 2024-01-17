import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Serie} from "../Serie";
import {SerieService} from "../Serie.service";


@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent implements OnInit {
  series :Serie[];

  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }

  serie: Serie = new Serie();
  constructor(private serieservice: SerieService,private router: Router) {
  }
  slectedCostDuration: string = '';
  cost: string = '';
  id: number;

  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;

  }


  ngOnInit(): void {
   this.getSeries();
  }

  private getSeries(){
    this.serieservice.getSerieList().subscribe(data => {
      this.series = data;
    });
  }

  saveSerie(){
    this.serieservice.createSerie(this.serie).subscribe( data =>{
      console.log(this.serieservice);
      this.goToserieList();
    },
    error => console.log(error));
  }

  goToserieList(){
    this.router.navigate(['/Serie']);
  }

  onSubmit(){
    console.log(this.serie);
    this.saveSerie();
  }

  
}
