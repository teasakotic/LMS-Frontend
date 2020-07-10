import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fakultet } from '../models/fakultet';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root',
})
export class FakultetService {
  private _url = 'http://localhost:8080/fakultet';

  constructor(private http: HttpClient) {}

  getFakulteti(): Observable<Fakultet[]> {
    return this.http.get<Fakultet[]>(this._url);
  }

  getFakultet(id: number): Observable<Fakultet> {
    return this.http.get<Fakultet>(this._url + `/${id}`);
  }

  getFakultetEmail(id: number): Observable<Email[]> {
    return this.http.get<Email[]>(this._url + '/emails' + `/${id}`);
  }

  getFakultetTelefon(id: number): Observable<Email[]> {
    return this.http.get<Email[]>(this._url + '/telefoni' + `/${id}`);
  }
}
