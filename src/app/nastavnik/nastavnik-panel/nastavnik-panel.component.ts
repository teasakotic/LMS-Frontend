import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Nastavnik } from 'src/app/models/nastavnik';
import { Predmet } from 'src/app/models/predmet';
import { LicniPodaci } from 'src/app/models/licni-podaci';
import { NastavnikNaRealizacijiService } from 'src/app/services/nastavnik-na-realizaciji.service';
import { PredmetiService } from 'src/app/services/predmeti.service';
import { EvaluacijaZnanjaService } from 'src/app/services/evaluacija-znanja.service';
import { RegistrovaniKorisniciService } from 'src/app/services/registrovani-korisnici.service';
import { RegistrovaniKorisnik } from 'src/app/models/registrovani-korisnik';
import { Student } from 'src/app/models/student';
import { StudentNaGodiniService } from 'src/app/services/student-na-godini.service';

@Component({
  selector: 'app-nastavnik-panel',
  templateUrl: './nastavnik-panel.component.html',
  styleUrls: ['./nastavnik-panel.component.css'],
})
export class NastavnikPanelComponent implements OnInit {
  nastavnik: Nastavnik = {
    licniPodaci: {
      ime: null,
    } as LicniPodaci,
  } as Nastavnik;
  predmeti: Predmet[] = [];

  // Predmeti
  dataSourcePredmeti;
  displayedColumnsPredmeti: string[];
  // Silabus
  dataSourceSilabus = [];
  displayedColumnsSilabus: string[];
  // Definicija evaluacije
  dataSourceDefEv = [];
  displayedColumnsDefEv: string[];
  // Filter Data
  public searchText: string;
  korisnici: RegistrovaniKorisnik[] = [];
  // Student
  studenti: Student[] = [];

  constructor(
    private ps: PredmetiService,
    private nnrs: NastavnikNaRealizacijiService,
    private ezs: EvaluacijaZnanjaService,
    private rks: RegistrovaniKorisniciService,
    private sngs: StudentNaGodiniService
  ) {}

  ngOnInit(): void {
    this.nnrs.getNastavnik(1).subscribe((r) => {
      this.nastavnik = r.nastavnik;
      this.predmeti.push(r.realizacijaPredmeta.predmet);
      this.dataSourcePredmeti = this.predmeti;

      this.displayedColumnsPredmeti = [
        'naziv',
        'espb',
        'brojPredavanja',
        'brojVezbi',
        'istrazivackiRad',
      ];

      this.ps.getSilabus(1).subscribe((r) => {
        this.dataSourceSilabus.push(r);
      });

      this.displayedColumnsSilabus = ['opis', 'nedelja', 'akcije'];
    });

    this.ezs.getEvaluacija().subscribe((r) => {
      this.displayedColumnsDefEv = [
        'id',
        'realizacijaPredmeta.predmet.naziv',
        'trajanjeUMinutima',
        'vremePocetka',
        'vremeZavrsetka',
        'akcije',
      ];

      this.dataSourceDefEv.push(r);
    });

    this.rks.getKorisnici().subscribe((r) => {
      this.korisnici = r;
    });

    this.sngs.getStudentNaGodini().subscribe((r) => {
      console.log(r);
    });
  }
}
