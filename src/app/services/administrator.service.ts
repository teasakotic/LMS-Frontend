import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrator } from '../models/administrator';

@Injectable({
  providedIn: 'root',
})
export class AdministratorService {
  private _url = 'http://localhost:3000/administrator';

  constructor(private http: HttpClient) {}

  getAdministratori(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(this._url);
  }

  getAdministrator(id: number): Observable<Administrator> {
    return this.http.get<Administrator>(this._url + `/${id}`);
  }
}
