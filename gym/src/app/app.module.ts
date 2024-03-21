import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-components/home/home.component';
import { PricesComponent } from './home-components/prices/prices.component';
import { FooterComponent } from './home-components/footer/footer.component';
import { HeaderComponent } from './home-components/header/header.component';
import { ContactUsComponent } from './home-components/contact-us/contact-us.component';
import { FacilitiesComponent } from './home-components/facilities/facilities.component';
import { AboutUsComponent } from './home-components/about-us/about-us.component';
import { ServicesComponent } from './home-components/services/services.component';
import { TeamComponent } from './home-components/team/team.component';
import { ClassesComponent } from './home-components/classes/classes.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricesComponent,
    FooterComponent,
    HeaderComponent,
    ContactUsComponent,
    FacilitiesComponent,
    AboutUsComponent,
    ServicesComponent,
    TeamComponent,
    ClassesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
