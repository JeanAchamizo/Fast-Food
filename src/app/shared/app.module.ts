import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { HomeComponent } from "../public/pages/home/home.component";
import { ContactComponent } from "../public/pages/contact/contact.component";
import { ProjectsComponent } from "../public/pages/projects/projects.component";
import { ServicesComponent } from "../public/pages/services/services.component";
import { AboutUsComponent } from "../public/pages/about-us/about-us.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    ServicesComponent,
    AboutUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    MatSlideToggleModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
