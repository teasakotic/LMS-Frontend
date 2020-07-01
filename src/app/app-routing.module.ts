import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniverzitetComponent } from './univerzitet/univerzitet.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SilabusComponent } from './silabus/silabus.component';
import { ProfilComponent } from './profil/profil.component';
import { IzmjeniProfilComponent } from './profil/izmjeni-profil/izmjeni-profil.component';
import { StudijskiProgramComponent } from './studijski-program/studijski-program.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { NastavniMaterijaliComponent } from './nastavni-materijali/nastavni-materijali.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { AdministratorPanelComponent } from './administrator/administrator-panel/administrator-panel.component';
import { NastavnikPanelComponent } from './nastavnik/nastavnik-panel/nastavnik-panel.component';
import { AdministrativnoOsobljePanelComponent } from './administrativno-osoblje/administrativno-osoblje-panel/administrativno-osoblje-panel.component';
import { PrijemniComponent } from './prijemni/prijemni.component';
import { NastavnikPanelAddEditComponent } from './nastavnik/nastavnik-panel/nastavnik-panel-add-edit/nastavnik-panel-add-edit.component';

const routes: Routes = [
  { path: 'univerzitet', component: UniverzitetComponent },

  { path: 'fakulteti', component: FakultetComponent },
  {
    path: 'fakulteti/:id/studijski-program',
    component: StudijskiProgramComponent,
  },

  {
    path: 'fakulteti/:id/studijski-program/:id/predmeti',
    component: PredmetiComponent,
  },

  { path: 'silabus/:id', component: SilabusComponent },
  { path: 'nastavni-materijal/:id', component: NastavniMaterijaliComponent },

  { path: 'profil', component: ProfilComponent },
  { path: 'profil/:id', component: IzmjeniProfilComponent },

  { path: 'profil/:id/student-panel', component: StudentPanelComponent },
  {
    path: 'profil/:id/prijemni-ispit',
    component: PrijemniComponent,
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'administrator-panel', component: AdministratorPanelComponent },

  // TODO: Promjeniti path na 'nastavnik-panel/:id' , jer dobijamo id od nastavnika ciji je panel
  { path: 'nastavnik-panel', component: NastavnikPanelComponent },
  {
    path: 'nastavnik-panel/addedit',
    component: NastavnikPanelAddEditComponent,
  },
  {
    path: 'administrativno-osoblje-panel',
    component: AdministrativnoOsobljePanelComponent,
  },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
