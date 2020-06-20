import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _url = 'http://localhost:3000/korisnici';

  constructor(private http: HttpClient) {}

  login(korisnik: RegistrovaniKorisnik): Observable<RegistrovaniKorisnik> {
    return this.http.post<RegistrovaniKorisnik>(this._url, korisnik);
  }

  // TODO: Put this method in register users service
  getKorisnici(): Observable<RegistrovaniKorisnik[]> {
    return this.http.get<RegistrovaniKorisnik[]>(this._url);
  }

  // TODO: Same as the getKorisnici()
  getKorisnik(id: number): Observable<RegistrovaniKorisnik> {
    return this.http.get<RegistrovaniKorisnik>(this._url + `/${id}`);
  }

  // TODO: Same -||-
  change(
    id: number,
    korisnik: RegistrovaniKorisnik
  ): Observable<RegistrovaniKorisnik> {
    return this.http.put<RegistrovaniKorisnik>(this._url + `/${id}`, korisnik);
  }
}
