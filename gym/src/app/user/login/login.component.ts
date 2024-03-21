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


constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}
  loginForm !: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }

  login(){
    this.authService.loginService(this.loginForm.value)
    .subscribe({
      next: (res) =>{
        localStorage.setItem('user_id', res.token);
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(['home']);
        this.loginForm.reset();
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }
}
