import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentNaGodini } from '../models/student-na-godini';

@Injectable({
  providedIn: 'root',
})
export class StudentNaGodiniService {
  private url = 'http://localhost:8080/studentNaGodini';

  constructor(private http: HttpClient) {}

  getStudentNaGodini() {
    return this.http.get(this.url);
  }
}
