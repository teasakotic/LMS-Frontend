import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ishod } from '../models/ishod';

@Injectable({
  providedIn: 'root',
})
export class SilabusServiceService {
  private url = 'http://localhost:8080/predmet';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ishod[]> {
    return this.http.get<Ishod[]>(this.url);
  }

  getOne(id: number): Observable<Ishod> {
    return this.http.get<Ishod>(this.url + `/${id}`);
  }

  delete(id: number): Observable<Ishod> {
    return this.http.delete<Ishod>(this.url + `${id}`);
  }

  create(newIshod: Ishod): Observable<Ishod> {
    return this.http.post<Ishod>(this.url, newIshod);
  }

  update(id: number, ishod: Ishod): Observable<Ishod> {
    return this.http.put<Ishod>(this.url + `/${id}`, ishod);
  }
}
