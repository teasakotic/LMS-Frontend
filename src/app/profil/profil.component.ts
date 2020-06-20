import { Component, OnInit } from '@angular/core';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';
import { LoginService } from '../services/login.service';

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
    korisnickoIme: null,
    lozinka: null,
  };

  constructor(private ls: LoginService) {}

  ngOnInit(): void {
    this.ls.getKorisnik(1).subscribe((r) => (this.korisnik = r));
  }
}
