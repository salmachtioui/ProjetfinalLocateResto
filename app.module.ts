import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {CreateVilleComponent} from "./Ville/CreateVille/create-ville.component";
import { JwtModule } from '@auth0/angular-jwt';
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./login/login.service";
import { HomeComponent } from './home/home.component';
import {BrowserModule} from "@angular/platform-browser";
import { AdminComponent } from './admin/admin.component';
@NgModule({
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
      },
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    AdminComponent,
  ],

  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
