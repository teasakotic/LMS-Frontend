import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predmet } from '../models/predmet';

@Injectable({
  providedIn: 'root',
})
export class GodinaStudijaService {
  private _url = 'http://localhost:8080/godinaStudija';

  constructor(private http: HttpClient) {}

  getPredmetiByGodinaStudija(id: number) {
    return this.http.get(this._url + '/predmeti' + `/${id}`);
  }
}
