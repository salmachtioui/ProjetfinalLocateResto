import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from '../Zone';
import { ZoneService } from '../Zone.service';

@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.css']
})
export class UpdateZoneComponent implements OnInit {
  zones: Zone[];
  id: number;
  zone: Zone = new Zone();
  slectedCostDuration: string = '';

  constructor(
      private zoneservice: ZoneService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.zoneservice.getZoneById(this.id).subscribe(
        (data) => {
          this.zone = data;
        },
        (error) => console.log(error)
    );

    this.getZones(); // Appel de la méthode pour charger la liste des zones
  }

  selectChangeHandler(event: any) {
    // Mise à jour de l'interface utilisateur
    this.slectedCostDuration = event.target.value;
  }

  private getZones() {
    this.zoneservice.getZoneList().subscribe((data) => {
      this.zones = data;
    });
  }

  onSubmit() {
    this.zoneservice.updateZone(this.id, this.zone).subscribe(
        (data) => {
          this.goToVilleList();
        },
        (error) => console.log(error)
    );
  }

  goToVilleList() {
    this.router.navigate(['/Zone']);
  }
}
