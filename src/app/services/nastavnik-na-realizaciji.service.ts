import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NastavnikNaRealizaciji } from '../models/nastavnik-na-realizaciji';

@Injectable({
  providedIn: 'root',
})
export class NastavnikNaRealizacijiService {
  private url = 'http://localhost:8080/nastavnikNaRealizaciji';

  constructor(private http: HttpClient) {}

  getNastavnik(id: number): Observable<NastavnikNaRealizaciji> {
    return this.http.get<NastavnikNaRealizaciji>(this.url + `/${id}`);
  }
}
