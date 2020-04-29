import { NgModule } from '@angular/core';

// Material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';




// Material const
const MaterialComponent = [
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatButtonModule,
  MatTabsModule,
  MatButtonToggleModule
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
