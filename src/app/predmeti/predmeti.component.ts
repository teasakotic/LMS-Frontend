import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudijskiProgramService } from '../services/studijski-program.service';
import { StudijskiProgram } from '../models/studijski-program';

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
    godinaStudija: null,
  };

  constructor(
    private sps: StudijskiProgramService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sps
      .getStudijskiProgram(this.ar.snapshot.params['id'])
      .subscribe((r) => (this.studijskiProgram = r));
      console.log(this.studijskiProgram);
      
  }
}
