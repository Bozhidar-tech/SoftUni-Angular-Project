import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reset/:token', component: ResetComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'workouts', component: WorkoutsComponent},
  { path: 'update-data', component: UpdateDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
