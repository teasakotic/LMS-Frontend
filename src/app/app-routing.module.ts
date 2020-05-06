import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniverzitetComponent } from './univerzitet/univerzitet.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SilabusComponent } from './silabus/silabus.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {path: 'univerzitet', component: UniverzitetComponent},
  {path: 'fakulteti', component: FakultetComponent},
  {path: 'silabus', component: SilabusComponent},

  {path: 'profil', component: ProfilComponent},
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
