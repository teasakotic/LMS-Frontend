import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { UniverzitetComponent } from './univerzitet/univerzitet.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { StudijskiProgramComponent } from './studijski-program/studijski-program.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniverzitetComponent,
    FakultetComponent,
    StudijskiProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
