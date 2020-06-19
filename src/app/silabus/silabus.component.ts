import { Component, OnInit } from '@angular/core';
import { Ishod } from '../models/ishod';
import { PredmetiService } from '../services/predmeti.service';
import { Predmet } from '../models/predmet';
import { ActivatedRoute } from '@angular/router';
import { PredmetiComponent } from '../predmeti/predmeti.component';

// TODO: Delete me after setup backend
// const elementData: Ishod[] = [
//   { id: 0, opis: 'Opis prve nedelje', nedelja: 1 },
//   { id: 1, opis: 'Opis druge nedelje', nedelja: 2 },
//   { id: 2, opis: 'Opis trece nedelje', nedelja: 3 },
//   { id: 3, opis: 'Opis cetvrte nedelje', nedelja: 4 },
// ];

@Component({
  selector: 'app-silabus',
  templateUrl: './silabus.component.html',
  styleUrls: ['./silabus.component.css'],
})
export class SilabusComponent implements OnInit {
  predmet: Predmet = {
    brojPredavanja: null,
    brojVezbi: null,
    drugiObliciNastave: null,
    espb: null,
    id: null,
    istrazivackiRad: null,
    naziv: null,
    obavezan: null,
    ostaliCasovi: null,
    silabus: null,
    godinaStudija: null,
  };

  // TODO: Get silabus from chosen predmet
  ishodi: Ishod[] = this.predmet.silabus;

  constructor(private ps: PredmetiService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ps
      .getPredmet(this.ar.snapshot.params['id'])
      .subscribe((r) => (this.predmet = r));
  }
}
