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
import { NutritionComponent } from './nutrition/nutrition.component';
import { CreateArticleComponent } from './nutrition/create-article/create-article.component';
import { UpdateArticleComponent } from './nutrition/update-article/update-article.component';
import { StrengthTrainingComponent } from './strength-training/strength-training.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, WorkoutsComponent, UpdateDataComponent, NutritionComponent, CreateArticleComponent, UpdateArticleComponent, StrengthTrainingComponent],
  imports: [CommonModule,UserRoutingModule, RouterModule, ReactiveFormsModule, FormsModule],
})
export class UserModule {}
