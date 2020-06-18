import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fakultet } from '../models/fakultet';

@Injectable({
  providedIn: 'root',
})
export class FakultetService {
  private _url = 'http://localhost:3000/fakulteti';

  constructor(private http: HttpClient) {}

  getFakulteti(): Observable<Fakultet[]> {
    return this.http.get<Fakultet[]>(this._url);
  }

  getFakultet(id: number): Observable<Fakultet> {
    return this.http.get<Fakultet>(this._url + `/${id}`);
  }
}
