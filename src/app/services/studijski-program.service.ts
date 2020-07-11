import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudijskiProgram } from '../models/studijski-program';

@Injectable({
  providedIn: 'root',
})
export class StudijskiProgramService {
  private _url = 'http://localhost:8080/studijskiProgram';

  constructor(private http: HttpClient) {}

  getStudijskiProgrami(): Observable<StudijskiProgram[]> {
    return this.http.get<StudijskiProgram[]>(this._url);
  }

  getStudijskiProgram(id: number): Observable<StudijskiProgram> {
    return this.http.get<StudijskiProgram>(this._url + `/${id}`);
  }
}
