import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {CreateVilleComponent} from "../../Ville/CreateVille/create-ville.component";
import {VilleListComponent} from "../../Ville/ListVille/ville-list.component";
import {SearchPipe} from "../../Ville/ListVille/search.pipe";
import {UpdateVilleComponent} from "../../Ville/UpdateVille/update-ville.component";
import {ZoneListComponent} from "../../Zone/ListZone/zone-list.component";
import {CreateZoneComponent} from "../../Zone/CreateZone/create-zone.component";
import {SpecialiteListComponent} from "../../Specialite/ListSpeciality/Specialite-list.component";
import {CreateSpecialiteComponent} from "../../Specialite/CreateSpeciality/create-Specialite.component";
import {UpdateSpecialitesComponent} from "../../Specialite/UpdateSpecialite/update-specialites.component";
import {SerieListComponent} from "../../Serie/ListSerie/Serie-list.component";
import {CreateSerieComponent} from "../../Serie/CreateSerie/create-Serie.component";
import {UpdateSerieComponent} from "../../Serie/UpdateSerie/update-serie.component";
import {RestaurantListComponent} from "../../Restaurant/ListRestaurant/Restaurant-list.component";
import {UpdateRestaurantComponent} from "../../Restaurant/updateRestarant/update-restaurant.component";
import {RestaurantVListComponent} from "../../Restaurant/VlistRestaurant/RestaurantV-list.component";
import {RestaurantDetailsComponent} from "../../Restaurant/Details/typeHouse-details.component";
import {CreateRestaurantComponent} from "../../Restaurant/CreateRestaurant/create-restaurant.component";
import {LoginComponent} from "../../login/login.component";
import {UpdateZoneComponent} from "../../Zone/UpdateZone/update-zone.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CreateVilleComponent,
    VilleListComponent,
    SearchPipe,
    UpdateVilleComponent,
    ZoneListComponent,
    CreateZoneComponent,
    SpecialiteListComponent,
    CreateSpecialiteComponent,
    UpdateSpecialitesComponent,
    SerieListComponent,
    CreateSerieComponent,
    UpdateSerieComponent,
    RestaurantListComponent,
    UpdateRestaurantComponent,
    RestaurantVListComponent,
    RestaurantDetailsComponent,
    CreateRestaurantComponent,
    LoginComponent,
    UpdateZoneComponent
  ]
})

export class AdminLayoutModule {}
