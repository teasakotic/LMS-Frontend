import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NastavniMaterijal } from '../models/nastavni-materijal';

@Injectable({
  providedIn: 'root',
})
export class NastavniMaterijalService {
  private _url = 'http://localhost:8080/nastavniMaterijal';

  constructor(private http: HttpClient) {}

  getNastavniMaterijal(id: number): Observable<NastavniMaterijal> {
    return this.http.get<NastavniMaterijal>(this._url + `/${id}`);
  }
}
