import { Component, OnInit } from '@angular/core';
import { KorisniciService } from 'src/app/services/korisnici.service';
import { RegistrovaniKorisnik } from 'src/app/models/registrovani-korisnik';

@Component({
  selector: 'app-administrator-panel',
  templateUrl: './administrator-panel.component.html',
  styleUrls: ['./administrator-panel.component.css'],
})
export class AdministratorPanelComponent implements OnInit {
  korisnici: RegistrovaniKorisnik[] = [];

  dataSource;
  displayedColumns: string[];

  constructor(private ks: KorisniciService) {}

  ngOnInit(): void {
    this.ks.getKorisnici().subscribe((r) => {
      this.korisnici = r;
      this.dataSource = this.korisnici;
      this.displayedColumns = ['id', 'korisnickoIme', 'email', 'dozvola'];
    });
  }
}
