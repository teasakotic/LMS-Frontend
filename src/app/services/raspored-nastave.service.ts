import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RasporedNastaveService {
  private _url = 'http://localhost:3000/rasporedNastave';

  constructor(private http: HttpClient) {}

  getRaspored() {
    return this.http.get(this._url);
  }
}
