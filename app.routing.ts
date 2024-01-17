import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from "./login/login.component";
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {RestaurantListComponent} from "./Restaurant/ListRestaurant/Restaurant-list.component";

const routes: Routes =[
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'Restaurant', component: RestaurantListComponent }, // Add this line for the restaurant route
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
