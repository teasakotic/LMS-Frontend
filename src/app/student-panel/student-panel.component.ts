import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { Adresa } from '../models/adresa';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';
import { LicniPodaci } from '../models/licni-podaci';
import { PohadjanjePredmeta } from '../models/pohadjanje-predmeta';
import { Obavjestenje } from '../models/obavjestenje';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css'],
})
export class StudentPanelComponent implements OnInit {
  student: Student = {
    adresa: {} as Adresa,
    id: null,
    registrovaniKorisnik: {} as RegistrovaniKorisnik,
    licniPodaci: {} as LicniPodaci,
    pohadjanjePredmeta: [] as PohadjanjePredmeta[],
  };

  oba = {
    id: null,
    sadrzaj: null,
    vremePostavljanja: null,
    naslov: null,
    datumObjave: null,
  } as Obavjestenje;

  ob = this.student.pohadjanjePredmeta.map((r) =>
    r.realizacijaPredmeta.obavjestenje.map((a) => (this.oba.naslov = a.naslov))
  );

  constructor(private ss: StudentService) {}

  ngOnInit(): void {
    this.ss.getStudent(1).subscribe((r) => (this.student = r));
  }
}
