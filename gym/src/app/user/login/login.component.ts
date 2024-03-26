import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {}

  loginForm !: FormGroup;
  errorMessage: string = '';
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }
  login() {
    this.authService.loginService(this.loginForm.value)
      .subscribe({
        next: (res) => {
          localStorage.setItem('user_id', res.token);
          this.isAdmin = this.isAdmin;
          this.authService.isLoggedIn$.next(true);
          this.router.navigate(['home']);
          this.loginForm.reset();
          this.errorMessage = '';
        },
        error: (err) => {
          if (err.status === 404) {
            alert('Invalid email address');
          } else if (err.status === 401){
            alert('Wrong password');
          }
        }
      });
  }
}