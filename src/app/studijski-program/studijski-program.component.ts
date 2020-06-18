import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakultetService } from '../services/fakultet.service';
import { Fakultet } from '../models/fakultet';

@Component({
  selector: 'app-studijski-program',
  templateUrl: './studijski-program.component.html',
  styleUrls: ['./studijski-program.component.css'],
})
export class StudijskiProgramComponent implements OnInit {
  fakultet: Fakultet = {
    id: null,
    naziv: null,
    opis: null,
    univerzitet: null,
    adresa: null,
    emailFakulteta: null,
    studijskiProgram: null,
    telefonFakulteta: null,
  };

  constructor(private ac: ActivatedRoute, private fs: FakultetService) {}

  ngOnInit(): void {
    this.fs
      .getFakultet(this.ac.snapshot.params['id'])
      .subscribe((r) => (this.fakultet = r));
  }
}
