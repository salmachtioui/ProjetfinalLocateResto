import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Serie} from "../Serie";
import {SerieService} from "../Serie.service";

@Component({
  selector: 'app-insurance-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})

export class SerieListComponent implements OnInit {


  series: Serie[];

  constructor(private serieService: SerieService,
    private router: Router) { }
  searchText = '';

  ngOnInit(): void {
    this.getSeries();
  }

  private getSeries(){
    this.serieService.getSerieList().subscribe(data => {
      this.series = data;
    });
  }

  seriesDetails(id: number){
    this.router.navigate(['specialite-details', id]);
  }

  updateSeries(id: number){
    this.router.navigate(['UpdateSerie', id]);
  }
  confirmationSerie(id: number){
    this.router.navigate(['pay-specilite', id]);
  }

  deleteSerie(id: number){
    this.serieService.deleteSerie(id).subscribe( data => {
      console.log(data);
      this.getSeries();
    })
  }
}
