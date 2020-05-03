import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Univerzitet } from '../models/univerzitet';

@Injectable({
  providedIn: 'root'
})
export class UniverzitetService {

  // FIXME: For server setup
  // private _url = "http://localhost:3000/";
  // private prefix = 'univerzitet';


  constructor(private http: HttpClient) { }

  getUniverzitet() {}
}
