import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const password = this.registrationForm.get('password')!.value;
      const repeatPassword = this.registrationForm.get('repeatPassword')!.value;
      
      if (password !== repeatPassword) {
        alert("Passwords do not match. Please make sure both passwords are the same.");
        return;
      }
  
      this.authService.registerService(this.registrationForm.value)
        .subscribe({
          next: (res) => {
            alert("User Created!");
            this.router.navigate(['/login']);
          },
          error: (err) => {
            alert(err);
          }
        });
    } else {
      console.log('Form is invalid, cannot submit.');
    }
  }
}