import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './home/feature/feature.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { Caroussel2Component } from './home/caroussel2/caroussel2.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
import {UserServiceService} from './services/user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    JumbotronComponent,
    Caroussel2Component,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    ProfilComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
