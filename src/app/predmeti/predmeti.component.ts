import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudijskiProgramService } from '../services/studijski-program.service';
import { StudijskiProgram } from '../models/studijski-program';
import { Predmet } from '../models/predmet';
import { GodinaStudija } from '../models/godina-studija';
import { GodinaStudijaService } from '../services/godina-studija.service';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css'],
})
export class PredmetiComponent implements OnInit {
  studijskiProgram: StudijskiProgram = {
    id: null,
    fakultet: null,
    naziv: null,
    opis: null,
    godinaStudija: {} as GodinaStudija,
  };

  predmeti: {};

  constructor(
    private sps: StudijskiProgramService,
    private gss: GodinaStudijaService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sps
      .getStudijskiProgram(this.ar.snapshot.params['id'])
      .subscribe((r) => (this.studijskiProgram = r));

    this.gss
      .getPredmetiByGodinaStudija(this.ar.snapshot.params['id'])
      .subscribe((r) => {
        this.predmeti = r;
      });
  }
}
