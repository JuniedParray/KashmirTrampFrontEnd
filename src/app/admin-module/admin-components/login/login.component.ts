import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../adminServices/auth.service';
import { Login } from '../../adminModels/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: Login = {
    email: '',
    password: '',
    role: '',
    name: ''
  };

  constructor(private authService: AuthService, private router: Router) {}
  login(): void {
    this.authService.login(this.loginData).subscribe(success => {
      if (success) {
        this.router.navigate(['/admin']);// ✅ Redirect after login
      } else {
        alert('Invalid username or password');
      }
    });
  }
  
}