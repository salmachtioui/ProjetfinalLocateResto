// Import statements (ensure you import what is needed)
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Simulated user credentials (you might get these from a service or API)
  private adminUsername = 'admin@admin';
  private adminPassword = 'admin@admin';
  adminLoggedIn = false;
  userLoggedIn = false;
  constructor(private router: Router, private loginService: LoginService) {

  }

  // Method for simulating admin login
  loginAsAdmin() {
    // Simulated authentication logic
    // In a real-world scenario, you would make an HTTP request to a server for authentication
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');

    if (username === this.adminUsername && password === this.adminPassword) {
      // Successful authentication, navigate to the 'admin' route
      this.adminLoggedIn = true;
      this.router.navigate(['/Restaurant']);
    } else {
      // Failed authentication, you might want to display an error message
      alert('Invalid credentials. Please try again.');
    }
  }

  // Method for handling form submission
  onSubmit() {
    const email = prompt('Enter email:');
    const password = prompt('Enter password:');

    // Simulate user authentication using the login service
    this.loginService.authenticateUser({ email, password }).subscribe(
        (response) => {
          // Login successful, handle the response or navigate to another page
          this.userLoggedIn = true;
          console.log('Login successful:', response);
          // Example: Redirect to the login page
          this.router.navigate(['/Details']);
        },
        (error) => {
          // Handle login error
          console.error('Login error:', error);
          // Display an error message to the user
          alert(error); // Adjust as needed
        }
    );
  }
}