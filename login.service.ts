// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiUrl = 'http://localhost:8080/api/v1/user/login';

    constructor(private http: HttpClient) {}

    authenticateUser(loginData: { email: string, password: string }): Observable<any> {
        return this.http.post(this.apiUrl, loginData).pipe(
            catchError((error) => {
                console.error('Login error:', error);
                return throwError('Login failed. Please try again.'); // Adjust the error message as needed
            })
        );
    }
}
