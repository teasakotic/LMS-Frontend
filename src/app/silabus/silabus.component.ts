import { Component, OnInit } from '@angular/core';
import { Ishod } from '../models/ishod';
import { PredmetiService } from '../services/predmeti.service';
import { Predmet } from '../models/predmet';
import { ActivatedRoute } from '@angular/router';
import { PredmetiComponent } from '../predmeti/predmeti.component';

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
    silabus: [{} as Ishod],
    godinaStudija: null,
    obrisan: null,
  };

  dataSource = [];

  constructor(private ps: PredmetiService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ps.getPredmet(this.ar.snapshot.params['id']).subscribe((r) => {
      this.predmet = r;
    });
    this.ps.getSilabus(this.ar.snapshot.params['id']).subscribe((r) => {
      this.dataSource = r;
    });
  }

  displayedColumns: string[] = ['id', 'opis', 'nedelja'];
}
