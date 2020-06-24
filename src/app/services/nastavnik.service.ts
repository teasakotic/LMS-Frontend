import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nastavnik } from '../models/nastavnik';

@Injectable({
  providedIn: 'root',
})
export class NastavnikService {
  private _url = 'http://localhost:3000/nastavnici';

  constructor(private http: HttpClient) {}

  getNastavnici(): Observable<Nastavnik[]> {
    return this.http.get<Nastavnik[]>(this._url);
  }

  getNastavnik(id: number): Observable<Nastavnik> {
    return this.http.get<Nastavnik>(this._url + `/${id}`);
  }
}
