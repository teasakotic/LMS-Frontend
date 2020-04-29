import { NgModule } from '@angular/core';

// Material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';



// Material const
const MaterialComponent = [
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatButtonModule
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
