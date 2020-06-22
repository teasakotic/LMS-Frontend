import { Component, OnInit } from '@angular/core';
import { KorisniciService } from 'src/app/services/korisnici.service';
import { RegistrovaniKorisnik } from 'src/app/models/registrovani-korisnik';
import { StudijskiProgramService } from 'src/app/services/studijski-program.service';
import { StudijskiProgram } from 'src/app/models/studijski-program';

@Component({
  selector: 'app-administrator-panel',
  templateUrl: './administrator-panel.component.html',
  styleUrls: ['./administrator-panel.component.css'],
})
export class AdministratorPanelComponent implements OnInit {
  korisnici: RegistrovaniKorisnik[] = [];
  studijskiProgrami: StudijskiProgram[] = [];

  // Korisnici
  dataSourceKorisnici;
  displayedColumnsKorisnici: string[];

  // Studijski program
  dataSourceStudijskiProgram;
  displayedColumnsStudijskiProgram: string[];

  constructor(
    private ks: KorisniciService,
    private sps: StudijskiProgramService
  ) {}

  ngOnInit(): void {
    this.ks.getKorisnici().subscribe((r) => {
      this.korisnici = r;
      this.dataSourceKorisnici = this.korisnici;
      this.displayedColumnsKorisnici = [
        'id',
        'korisnickoIme',
        'email',
        'dozvola',
        'akcija',
      ];
    });
    this.sps.getStudijskiProgrami().subscribe(sp => {
      this.studijskiProgrami = sp;
      this.dataSourceStudijskiProgram = this.studijskiProgrami;
      this.displayedColumnsStudijskiProgram = [
        'id',
        'naziv',
        'opis',
        'akcija'
      ]
    })
  }
}
