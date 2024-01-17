import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {CreateVilleComponent} from "../../Ville/CreateVille/create-ville.component";
import {VilleListComponent} from "../../Ville/ListVille/ville-list.component";
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



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },

    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'CreateVille',        component: CreateVilleComponent },
    { path: 'Ville',        component: VilleListComponent },
    { path: 'UpdateVille/:id',        component: UpdateVilleComponent },
    { path: 'Zone',        component: ZoneListComponent },
    { path: 'CreateZone',        component: CreateZoneComponent },
    { path: 'Specialite',        component: SpecialiteListComponent },
    { path: 'CreateSpeciality',        component: CreateSpecialiteComponent },
    { path: 'UpdateSpecialite/:id',        component: UpdateSpecialitesComponent },
    { path: 'Serie',        component: SerieListComponent },
    { path: 'CreateSerie',        component: CreateSerieComponent },
    { path: 'UpdateSerie/:id',        component: UpdateSerieComponent },
    { path: 'Restaurant',        component: RestaurantListComponent },
    { path: 'UpdateRestarant/:id',        component: UpdateRestaurantComponent },
    { path: 'VlistRestaurant',        component: RestaurantVListComponent },
    { path: 'Details/:id',        component: RestaurantDetailsComponent },
    { path: 'CreateRestaurant',  component: CreateRestaurantComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'UpdateZone/:id',        component: UpdateZoneComponent },

];
