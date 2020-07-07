import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrovaniKorisnik } from 'src/app/models/registrovani-korisnik';
import { RegistrovaniKorisniciService } from 'src/app/services/registrovani-korisnici.service';

@Component({
  selector: 'app-izmjeni-profil',
  templateUrl: './izmjeni-profil.component.html',
  styleUrls: ['./izmjeni-profil.component.css'],
})
export class IzmjeniProfilComponent implements OnInit {
  constructor(
    private rs: RegistrovaniKorisniciService,
    private ac: ActivatedRoute,
    private router: Router
  ) {}
  korisnik: RegistrovaniKorisnik = {
    id: null,
    korisnickoIme: null,
    lozinka: null,
    email: null,
    dozvola: {
      id: null,
      naziv: null,
    },
  };

  ngOnInit(): void {
    this.rs
      .getKorisnik(this.ac.snapshot.params['id'])
      .subscribe((r) => (this.korisnik = r));
  }

  izmjena() {
    this.rs
      .change(this.ac.snapshot.params['id'], this.korisnik)
      .subscribe((r) => this.router.navigate(['/profil']));
  }
}
