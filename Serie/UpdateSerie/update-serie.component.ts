import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Serie} from "../Serie";
import {SerieService} from "../Serie.service";




@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-serie.component.html',
  styleUrls: ['./update-serie.component.css']
})
export class UpdateSerieComponent implements OnInit {
  series :Serie[];
  id: number;
  serie: Serie = new Serie();
  constructor(private serieservice: SerieService,
    private route: ActivatedRoute,
    private router: Router) { }
  slectedCostDuration: string = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.serieservice.getSerieById(this.id).subscribe(data => {
      this.serie = data;
    }, error => console.log(error));
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;
  }

  private getSerie(){
    this.serieservice.getSerieList().subscribe(data => {
      this.series = data;
    });
  }
  onSubmit(){
    this.serieservice.updateSerie(this.id, this.serie).subscribe( data =>{
      this.goToSerieList();
    }
    , error => console.log(error));
  }

  goToSerieList(){
    this.router.navigate(['/Serie']);
  }
}
