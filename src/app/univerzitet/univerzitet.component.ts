import { Component, OnInit } from '@angular/core';
import { UniverzitetService } from '../services/univerzitet.service';
import { Univerzitet } from '../models/univerzitet';

@Component({
  selector: 'app-univerzitet',
  templateUrl: './univerzitet.component.html',
  styleUrls: ['./univerzitet.component.css']
})
export class UniverzitetComponent implements OnInit {

  univerzitetPodaci:Univerzitet = {
    'id': null,
    'adresa': null,
    'datumOsnivanja': null,
    'emailUniverziteta': null,
    'naziv': null,
    'opis': null,
    'telefonUniverziteta': null
  };

  constructor(private us: UniverzitetService) { }

  ngOnInit(): void {
    this.univerzitetPodaci = this.us.getUniverzitet();
    console.log(this.univerzitetPodaci);
  }

}
