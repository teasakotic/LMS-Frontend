import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predmet } from '../models/predmet';
import { Ishod } from '../models/ishod';

@Injectable({
  providedIn: 'root',
})
export class PredmetiService {
  private _url = 'http://localhost:8080/predmet';

  constructor(private http: HttpClient) {}

  getPredmeti(): Observable<Predmet[]> {
    return this.http.get<Predmet[]>(this._url);
  }

  getPredmet(id: number): Observable<Predmet> {
    return this.http.get<Predmet>(this._url + `/${id}`);
  }

  getSilabus(id: number): Observable<Ishod[]> {
    return this.http.get<Ishod[]>(this._url + '/silabus' + `/${id}`);
  }
}
