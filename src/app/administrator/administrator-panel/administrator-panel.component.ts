import { Component, OnInit } from '@angular/core';
import { KorisniciService } from 'src/app/services/korisnici.service';
import { RegistrovaniKorisnik } from 'src/app/models/registrovani-korisnik';
import { StudijskiProgramService } from 'src/app/services/studijski-program.service';
import { StudijskiProgram } from 'src/app/models/studijski-program';
import { AdministrativnoOsobljeService } from 'src/app/services/administrativno-osoblje.service';
import { AdministrativnoOsoblje } from 'src/app/models/administrativno-osoblje';

@Component({
  selector: 'app-administrator-panel',
  templateUrl: './administrator-panel.component.html',
  styleUrls: ['./administrator-panel.component.css'],
})
export class AdministratorPanelComponent implements OnInit {
  korisnici: RegistrovaniKorisnik[] = [];
  studijskiProgrami: StudijskiProgram[] = [];
  administrativnoOsoblje: AdministrativnoOsoblje[] = [];

  // Korisnici
  dataSourceKorisnici;
  displayedColumnsKorisnici: string[];

  // Studijski program
  dataSourceStudijskiProgram;
  displayedColumnsStudijskiProgram: string[];

  //Administrativno osoblje
  dataSourceAdministrativnoOsoblje;
  displayedColumnsAdministrativnoOsoblje: string[];

  constructor(
    private ks: KorisniciService,
    private sps: StudijskiProgramService,
    private aos: AdministrativnoOsobljeService
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
    this.sps.getStudijskiProgrami().subscribe((sp) => {
      this.studijskiProgrami = sp;
      this.dataSourceStudijskiProgram = this.studijskiProgrami;
      this.displayedColumnsStudijskiProgram = ['id', 'naziv', 'opis', 'akcija'];
    });
    this.aos.getAdministrativnoOsoblje().subscribe((aos) => {
      this.administrativnoOsoblje = aos;
      this.dataSourceAdministrativnoOsoblje = this.administrativnoOsoblje;
      this.displayedColumnsAdministrativnoOsoblje = [
        'id',
        'korisnickoIme',
        'email',
        'dozvola',
        'prezime',
        'brTelefona',
        'jmbg',
        'akcija',
      ];
    });
  }
}
