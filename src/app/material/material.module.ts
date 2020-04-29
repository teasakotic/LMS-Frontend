import { NgModule } from '@angular/core';

// Material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


// Material const
const MaterialComponent = [
  MatSidenavModule,
  MatListModule
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
