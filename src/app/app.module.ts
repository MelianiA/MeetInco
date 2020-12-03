import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AnnonceComponent } from './annonce/annonce.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
