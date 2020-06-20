import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  korisnickoIme = new FormControl('', [Validators.required]);
  lozinka = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  prezime = new FormControl('', [Validators.required]);
  brTelefona = new FormControl('', [Validators.required]);
  jmbg = new FormControl('', [Validators.required]);
  slika = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (
      this.korisnickoIme.hasError('required') &&
      this.lozinka.hasError('required') &&
      this.email.hasError('required') &&
      this.prezime.hasError('required') &&
      this.brTelefona.hasError('required') &&
      this.jmbg.hasError('required')
    ) {
      return 'Polja ne smiju biti prazna';
    }

    return this.korisnickoIme.hasError('korisnickoIme')
      ? 'Nije validno korisnicko ime'
      : '' && this.lozinka.hasError('lozinka')
      ? 'Nije validna lozinka'
      : '' && this.email.hasError('email')
      ? 'Nije validan email'
      : '' && this.prezime.hasError('prezime')
      ? 'Nije validno prezime'
      : '' && this.brTelefona.hasError('brTelefona')
      ? 'Nije validan broj telefona'
      : '' && this.jmbg.hasError('jmbg')
      ? 'Nije validan jmbg'
      : '';
  }
}
