import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UpdateUser } from 'src/app/types/update';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  updateForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.updateForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.buildForm();

    const userId = localStorage.getItem('user_id');

    if (userId) {
      this.updateForm.patchValue({ userId });
    } else {
     alert('Please login to update data');
      this.router.navigate(['login']);
    }
  }

  buildForm() {
    this.updateForm = this.fb.group({
      fullName: [null],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [null],
      password: [null, [Validators.minLength(6)]],
      repeatPassword: [null, [Validators.minLength(6)]]
    }, { validators: this.passwordMatchValidator } as AbstractControlOptions);
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const repeatPassword = group.get('repeatPassword')?.value;

    if (password !== repeatPassword) {
      return { noMatch: true };
    }

    return null;
  }

  onSubmit() {
    this.submitted = true;

    if (this.updateForm.invalid) {
      return;
    }

    const userId = localStorage.getItem('user_id');

    let updatedUserData: UpdateUser;
    if (userId) {
      updatedUserData = {
        userId,
        fullName: this.updateForm.value.fullName,
        email: this.updateForm.value.email,
        phoneNumber: this.updateForm.value.phoneNumber,
        password: this.updateForm.value.password
      };
    } else {
      console.error('User ID not found in localStorage');
      return;
    }

    this.authService.updateService(updatedUserData)
      .subscribe({
        next: () => {
          alert("Information updated successfully")
          this.router.navigate(['home']);
        },
        error: (error) => {
          console.error('Error updating user:', error);
        }
      });
  }
}
