import { Component, OnInit } from '@angular/core';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';
import { RegistrovaniKorisniciService } from '../services/registrovani-korisnici.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  korisnik: RegistrovaniKorisnik = {
    dozvola: {
      id: null,
      naziv: null,
    },
    email: null,
    id: null,
    username: null,
    lozinka: null,
  };

  constructor(private rs: RegistrovaniKorisniciService) {}

  ngOnInit(): void {
    this.rs.getKorisnik(1).subscribe((r) => (this.korisnik = r));
  }
}
