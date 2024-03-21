import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { UpdateDataComponent } from './update-data/update-data.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, WorkoutsComponent, UpdateDataComponent],
  imports: [CommonModule,UserRoutingModule, RouterModule, ReactiveFormsModule, FormsModule],
})
export class UserModule {}
