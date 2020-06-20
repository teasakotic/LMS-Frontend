import { Component, OnInit } from '@angular/core';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  constructor(private regi) {}

  ngOnInit(): void {}

  data: RegistrovaniKorisnik[] = [
    {
      id: 0,
      korisnickoIme: 'test',
      lozinka: 'test',
      email: 'test@test.test',
      dozvola: { id: 0, naziv: 'student' },
    },
  ];
}
