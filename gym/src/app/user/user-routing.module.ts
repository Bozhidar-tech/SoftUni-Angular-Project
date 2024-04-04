import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { authGuard } from '../guards/auth-guard.guard';
import { NutritionComponent } from './nutrition/nutrition.component';
import { UpdateArticleComponent } from './nutrition/update-article/update-article.component';
import { CreateArticleComponent } from './nutrition/create-article/create-article.component';
import { StrengthTrainingComponent } from './strength-training/strength-training.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  { path: 'reset/:token', component: ResetComponent, canActivate: [authGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'workouts', component: WorkoutsComponent, canActivate: [authGuard]},
  { path: 'update-data', component: UpdateDataComponent, canActivate: [authGuard]},
  { path: 'nutrition', component: NutritionComponent},
  { path: 'create-article', component: CreateArticleComponent, canActivate: [authGuard]},
  { path: 'update-article/:id', component: UpdateArticleComponent, canActivate: [authGuard]},
  { path: 'strength-training', component: StrengthTrainingComponent, canActivate: [authGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
