import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
  imports: [ReactiveFormsModule]
})
export class ResetComponent implements OnInit {

  resetForm !: FormGroup;
  token !: string;

  constructor(private fb : FormBuilder, private router : Router, private authService : AuthService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(val=>{
      this.token = val['token'];
    });
  }

  passwordValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      return { 'invalidPassword': true };
    }
    return null;
  }

  reset() {
    if (this.resetForm.valid) {
      if (this.resetForm.value.password !== this.resetForm.value.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      let resetObj = {
        token: this.token,
        password: this.resetForm.value.password
      };
  
      this.authService.resetPasswordService(resetObj)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.resetForm.reset();
            this.router.navigate(['login']);
          },
          error: (err) => {
            alert(err.error.message);
          }
        });
    } else {
      alert("Form is invalid. Please check the input fields.");
    }
  }
}


