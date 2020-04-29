import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniverzitetComponent } from './univerzitet/univerzitet.component';


const routes: Routes = [
  {path: 'univerzitet', component: UniverzitetComponent},

  // {path: 'studijski-progrmai', component: },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
