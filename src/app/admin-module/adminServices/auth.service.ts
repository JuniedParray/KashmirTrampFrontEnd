import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Login } from '../adminModels/login';
import { Observable, map, catchError, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; // ✅ Import jwt-decode to parse token

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router, private service: DataService) {}

  login(loginModel: Login): Observable<boolean> {
    return this.service.post(`api/admin/Login`, loginModel).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token); // ✅ Store token
          this.isAuthenticated = true;
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Login error:', error);
        this.isAuthenticated = false;
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken'); // ✅ Remove token on logout
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');

    if (!token) {
      return false; // No token means user is not logged in
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const expiry = decodedToken.exp * 1000; // Convert to milliseconds

      if (Date.now() < expiry) {
        return true; // Token is valid
      } else {
        this.logout(); // If token expired, log out user
        return false;
      }
    } catch (error) {
      console.error('Invalid token:', error);
      this.logout();
      return false;
    }
  }
}
