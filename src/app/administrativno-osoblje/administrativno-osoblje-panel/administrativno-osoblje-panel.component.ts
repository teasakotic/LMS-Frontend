import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
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
      korisnickaDozvola: null,
      email: null,
      id: null,
      username: null,
      lozinka: null,
    },
    licniPodaci: {
      brTelefona: null,
      id: null,
      ime: null,
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

  akademskiKalendari: AkademskiKalendar[] = [];
  studenti: Student[] = [];

  constructor(
    private ss: StudentService,
    private rn: RasporedNastaveService,
    private aks: AkademskiKalendarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rn.getRaspored().subscribe((ras) => {
      this.raspored = ras;
    });
    this.aks.getKalendari().subscribe((aks) => {
      this.akademskiKalendari = aks;
    });
  }

  addStudent() {
    this.ss
      .addStudent(this.noviStudent)
      .subscribe((r) =>
        this.router.navigate(['/administrativno-osoblje-panel'])
      );
  }
}
