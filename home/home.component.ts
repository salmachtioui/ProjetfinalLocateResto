// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Simulated user credentials (you might get these from a service or API)
  private adminUsername = 'admin';
  private adminPassword = 'admin123';

  constructor(private router: Router) {}

  loginAsAdmin() {
    // Simulated authentication logic
    // In a real-world scenario, you would make an HTTP request to a server for authentication
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');

    if (username === this.adminUsername && password === this.adminPassword) {
      // Successful authentication, navigate to the 'admin' route
      this.router.navigate(['/admin']);
    } else {
      // Failed authentication, you might want to display an error message
      alert('Invalid credentials. Please try again.');
    }
  }
}

