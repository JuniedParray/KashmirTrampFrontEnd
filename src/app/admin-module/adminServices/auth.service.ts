import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Login } from '../adminModels/login';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router,private service : DataService) {}

  login(loginModel: Login): Observable<boolean> {
    return this.service.post(`api/admin/Login`, loginModel).pipe(
      map((response: any) => {
        debugger
        if (response && response.token) {
          localStorage.setItem('authToken', response.token); // ✅ Store token
          this.isAuthenticated = true;
          return true;
        }
        return false;
      }),
      catchError((error) => {debugger
        console.error("Login error:", error);
        this.isAuthenticated = false;
        return of(false); // Return observable of `false` on error
      })
    );
  }
  

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}