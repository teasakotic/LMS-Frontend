import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Univerzitet } from '../models/univerzitet';

@Injectable({
  providedIn: 'root'
})
export class UniverzitetService {

  // FIXME: For server setup
  // private _url = "http://localhost:3000/";
  // private prefix = 'univerzitet';

  private univerzitet: Univerzitet = {
    id: 1,
    naziv: "Univerzitet Singidunum",
    datumOsnivanja: new Date(),
    opis: "Univerzitet Singidunum Opis",
    rektor: { biografija: "Biografija rektora univerziteta" },
    adresa: { ulica: "Ulica univerziteta", broj: "Broj univerziteta" },
    emailUniverziteta: [{ email: 'test@test.test' }, { email: 'test2@test.test' }],
    telefonUniverziteta: [{ telefon: '066/321-321' }, { telefon: '066/123-123' }],
    fakulteti: [{ naziv: "Tehnicki fakultet", opis: "Opis tehnickog fakulteta" }, { naziv: "Fakultet za menadzment", opis: "Opis fakultetna za menadzment" }]
  }

  constructor(private http: HttpClient) { }

  getUniverzitet() {
    return this.univerzitet;
  }
}
