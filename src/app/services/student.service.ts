import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private _url = 'http://localhost:8080/student';

  constructor(private http: HttpClient) {}

  getStudenti(): Observable<Student[]> {
    return this.http.get<Student[]>(this._url);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this._url + `/${id}`);
  }

  addStudent(stu: Student): Observable<Student> {
    return this.http.post<Student>(this._url, stu);
  }

  getDetaljiStudenta(id: number): Observable<Student> {
    return this.http.get<Student>(this._url + '/detalji' + `/${id}`);
  }
}
