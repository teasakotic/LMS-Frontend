import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Univerzitet } from '../models/univerzitet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniverzitetService {
  private _url = 'http://localhost:8080/univerzitet';

  constructor(private http: HttpClient) {}

  getUniverzitet(id: number): Observable<Univerzitet> {
    return this.http.get<Univerzitet>(this._url + `/${id}`);
  }
}
