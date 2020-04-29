import { NgModule } from '@angular/core';

// Material modules
import {MatSidenavModule} from '@angular/material/sidenav';


// Material const
const MaterialComponent = [
  MatSidenavModule
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
