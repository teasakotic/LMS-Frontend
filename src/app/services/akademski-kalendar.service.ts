import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AkademskiKalendar } from '../models/akademski-kalendar';

@Injectable({
  providedIn: 'root',
})
export class AkademskiKalendarService {
  private _url = 'http://localhost:3000/akademskiKalendar';

  constructor(private http: HttpClient) {}

  getKalendari(): Observable<AkademskiKalendar[]> {
    return this.http.get<AkademskiKalendar[]>(this._url);
  }
}
