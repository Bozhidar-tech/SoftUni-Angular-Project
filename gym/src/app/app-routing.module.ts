import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-components/home/home.component';
import { PricesComponent } from './home-components/prices/prices.component';
import { ContactUsComponent } from './home-components/contact-us/contact-us.component';
import { ClassesComponent } from './home-components/classes/classes.component';
import { ShopComponent } from './home-components/shop/shop.component';
import { MyCartComponent } from './home-components/shop/my-cart/my-cart.component';
import { CreateProductComponent } from './home-components/shop/create-product/create-product.component';
import { UpdateProductComponent } from './home-components/shop/update-product/update-product.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'contact', component: ContactUsComponent},
  { path: 'classes', component: ClassesComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'my-cart', component: MyCartComponent, canActivate: [authGuard]},
  { path: 'create-product', component: CreateProductComponent, canActivate: [authGuard]},
  { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
