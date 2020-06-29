import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { RegistrovaniKorisnik } from 'src/app/models/registrovani-korisnik';
import { PohadjanjePredmeta } from 'src/app/models/pohadjanje-predmeta';
import { Adresa } from 'src/app/models/adresa';
import { LicniPodaci } from 'src/app/models/licni-podaci';
import { Router } from '@angular/router';
import { RasporedNastaveService } from 'src/app/services/raspored-nastave.service';
import { AkademskiKalendarService } from 'src/app/services/akademski-kalendar.service';
import { AkademskiKalendar } from 'src/app/models/akademski-kalendar';

@Component({
  selector: 'app-administrativno-osoblje-panel',
  templateUrl: './administrativno-osoblje-panel.component.html',
  styleUrls: ['./administrativno-osoblje-panel.component.css'],
})
export class AdministrativnoOsobljePanelComponent implements OnInit {
  noviStudent: Student = {
    id: null,
    registrovaniKorisnik: {
      dozvola: { id: null, naziv: 'Student' },
      email: null,
      id: null,
      korisnickoIme: null,
      lozinka: null,
    },
    licniPodaci: {
      brTelefona: null,
      id: null,
      putanjaProfilneSlike: null,
      jmbg: null,
      prezime: null,
    },
    adresa: {
      broj: null,
      id: null,
      mesto: null,
      ulica: null,
    },
    pohadjanjePredmeta: [],
  } as Student;

  // TODO: Raspored treba biti lista modela Raspored, napravi Raspored interface
  raspored;

  akademskiKalendari = [] as AkademskiKalendar[];

  constructor(
    private ss: StudentService,
    private rn: RasporedNastaveService,
    private aks: AkademskiKalendarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rn.getRaspored().subscribe((r) => (this.raspored = r));
    this.aks
      .getKalendari()
      .subscribe((r) =>
        this.akademskiKalendari.map((x) => (this.akademskiKalendari = r))
      );
    console.log(this.akademskiKalendari);
  }

  addStudent() {
    this.ss
      .addStudent(this.noviStudent)
      .subscribe((r) =>
        this.router.navigate(['/administrativno-osoblje-panel'])
      );
  }
}
