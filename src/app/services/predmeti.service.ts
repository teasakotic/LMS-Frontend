import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predmet } from '../models/predmet';

@Injectable({
  providedIn: 'root',
})
export class PredmetiService {
  private _url = 'http://localhost:3000/predmeti';

  constructor(private http: HttpClient) {}

  getPredmeti(): Observable<Predmet[]> {
    return this.http.get<Predmet[]>(this._url);
  }

  getPredmet(id: number): Observable<Predmet> {
    return this.http.get<Predmet>(this._url + `/${id}`);
  }
}
