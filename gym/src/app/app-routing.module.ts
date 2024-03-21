import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-components/home/home.component';
import { PricesComponent } from './home-components/prices/prices.component';
import { ContactUsComponent } from './home-components/contact-us/contact-us.component';
import { ClassesComponent } from './home-components/classes/classes.component';
import { ResetComponent } from './user/reset/reset.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'contact', component: ContactUsComponent},
  { path: 'classes', component: ClassesComponent },
  { path: 'reset/:token', component: ResetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
