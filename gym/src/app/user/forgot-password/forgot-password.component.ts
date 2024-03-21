import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  submit(){
    this.authService.sendEmailService(this.forgotForm.value.email)
      .subscribe({
        next: (res) => {
          // Display the message to the user
          alert(res.message);
          this.forgotForm.reset();
        },
        error: (err) => {
          // Handle error
          alert(err.error.message || 'An error occurred.');
        }
      });
  }
}