import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  private korisnik: RegistrovaniKorisnik;
  private token = null;

  login(korisnik) {
    return this.http.post('http://localhost:8080/login', korisnik).pipe((r) => {
      r.subscribe((t) => {
        this.token = t['token'];
        this.korisnik = JSON.parse(atob(t['tokne'].split('.')[1]));
        console.log(t['token']);
      });
      return r;
    });
  }

  validateRoles(uloge) {
    if (this.korisnik) {
      let korisnikUloga = new Set(this.korisnik['uloge']);
      let matchedRoles = uloge.filter((r) => korisnikUloga.has(r));
      if (matchedRoles.length > 0) {
        return true;
      }
    }
    return false;
  }

  getToken() {
    if (!this.korisnik) {
      return '';
    }
    return this.token;
  }
}
