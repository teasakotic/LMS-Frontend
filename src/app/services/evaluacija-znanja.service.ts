import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluacijaZnanja } from '../models/evaluacija-znanja';

@Injectable({
  providedIn: 'root',
})
export class EvaluacijaZnanjaService {
  private url = 'http://localhost:8080/evaluacijaZnanja';

  constructor(private http: HttpClient) {}

  getEvaluacija(): Observable<EvaluacijaZnanja[]> {
    return this.http.get<EvaluacijaZnanja[]>(this.url);
  }
}
