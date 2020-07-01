import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NastavniMaterijal } from '../models/nastavni-materijal';

@Injectable({
  providedIn: 'root',
})
export class NastavniMaterijalService {
  // FIXME: Fix this url ; This was for the test
  private _url = 'http://localhost:3000/nastavniMaterijal';

  constructor(private http: HttpClient) {}

  getNastavniMaterijal(): Observable<NastavniMaterijal[]> {
    return this.http.get<NastavniMaterijal[]>(this._url);
  }
}
