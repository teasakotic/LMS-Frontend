import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
1;

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
import { ProfilComponent } from './profil/profil.component';
import { IzmjeniProfilComponent } from './profil/izmjeni-profil/izmjeni-profil.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { NastavniMaterijaliComponent } from './nastavni-materijali/nastavni-materijali.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdministratorPanelComponent } from './administrator/administrator-panel/administrator-panel.component';
import { NastavnikPanelComponent } from './nastavnik/nastavnik-panel/nastavnik-panel.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { AdministrativnoOsobljeComponent } from './administrativno-osoblje/administrativno-osoblje.component';
import { AdministrativnoOsobljePanelComponent } from './administrativno-osoblje/administrativno-osoblje-panel/administrativno-osoblje-panel.component';
import { PrijemniComponent } from './prijemni/prijemni.component';
import { NastavnikPanelAddEditComponent } from './nastavnik/nastavnik-panel/nastavnik-panel-add-edit/nastavnik-panel-add-edit.component';
import { AuthInterceptor } from './auth.interceptor';

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
    SilabusComponent,
    ProfilComponent,
    IzmjeniProfilComponent,
    PredmetiComponent,
    NastavniMaterijaliComponent,
    StudentPanelComponent,
    AdministratorComponent,
    AdministratorPanelComponent,
    NastavnikPanelComponent,
    NastavnikComponent,
    AdministrativnoOsobljeComponent,
    AdministrativnoOsobljePanelComponent,
    PrijemniComponent,
    NastavnikPanelAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
