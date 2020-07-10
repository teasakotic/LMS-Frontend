import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Univerzitet } from '../models/univerzitet';
import { Observable } from 'rxjs';
import { Email } from '../models/email';
import { Telefon } from '../models/telefon';

@Injectable({
  providedIn: 'root',
})
export class UniverzitetService {
  private _url = 'http://localhost:8080/univerzitet';

  constructor(private http: HttpClient) {}

  getUniverzitet(id: number): Observable<Univerzitet> {
    return this.http.get<Univerzitet>(this._url + `/${id}`);
  }

  getUniverzitetEmails(id: number): Observable<Email[]> {
    return this.http.get<Email[]>(this._url + '/emails' + `/${id}`);
  }

  getUniverzitetTelefon(id: number): Observable<Telefon[]> {
    return this.http.get<Telefon[]>(this._url + '/telefoni' + `/${id}`);
  }
}
