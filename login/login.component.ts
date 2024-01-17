// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private router: Router) {}

    goToRestaurant() {
        // Navigate to the 'restaurant' route when the button is clicked
        this.router.navigate(['/Datails']);
    }
}
