import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private ls: LoginServiceService, private router: Router) {}

  ngOnInit(): void {}

  korisnik: RegistrovaniKorisnik = {
    id: null,
    korisnickoIme: null,
    lozinka: null,
    email: null,
    dozvola: null,
  };

  login() {
    this.ls.login(this.korisnik).subscribe((r) => this.router.navigate(['/']));
  }
}
