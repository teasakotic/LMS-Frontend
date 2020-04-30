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

  private univerzitet:Univerzitet = {
    'id': 1,
    'adresa': 'Kneza Mihajla',
    'datumOsnivanja': '02-03-2005',
    'emailUniverziteta': 'singi@singi.ac.rs',
    'naziv': 'Singidunum',
    'opis': 'Univerzitet Singidunum',
    'telefonUniverziteta': '021-321-321'
  }

  constructor(private http: HttpClient) { }

  getUniverzitet() {
    return this.univerzitet;
  }
}
