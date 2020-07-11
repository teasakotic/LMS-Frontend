import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrovaniKorisnik } from '../models/registrovani-korisnik';

@Injectable({
  providedIn: 'root',
})
export class KorisniciService {
  private _url = 'http://localhost:8080/registrovaniKorisnik';

  constructor(private http: HttpClient) {}

  getKorisnici(): Observable<RegistrovaniKorisnik[]> {
    return this.http.get<RegistrovaniKorisnik[]>(this._url);
  }

  getKorisnik(id: number): Observable<RegistrovaniKorisnik> {
    return this.http.get<RegistrovaniKorisnik>(this._url + `${id}`);
  }

  delete(id: number) {
    return this.http.delete(this._url + `/${id}`);
  }
}
