import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdministrativnoOsoblje } from '../models/administrativno-osoblje';

@Injectable({
  providedIn: 'root',
})
export class AdministrativnoOsobljeService {
  private _url = 'http://localhost:3000/administrativno-osoblje';

  constructor(private http: HttpClient) {}

  getAdministrativnoOsoblje(): Observable<AdministrativnoOsoblje[]> {
    return this.http.get<AdministrativnoOsoblje[]>(this._url);
  }

  getAdministrativnoOsobljeOne(id: number): Observable<AdministrativnoOsoblje> {
    return this.http.get<AdministrativnoOsoblje>(this._url + `/${id}`);
  }
}
