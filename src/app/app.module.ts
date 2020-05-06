import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UniverzitetComponent } from './univerzitet/univerzitet.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { StudijskiProgramComponent } from './studijski-program/studijski-program.component';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from './shared/material/material.module';
import { RegisterComponent } from './register/register.component';
import { MapMapboxComponent } from './map-mapbox/map-mapbox.component';
import { SilabusComponent } from './silabus/silabus.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniverzitetComponent,
    FakultetComponent,
    StudijskiProgramComponent,
    LoginComponent,
    RegisterComponent,
    MapMapboxComponent,
    SilabusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
