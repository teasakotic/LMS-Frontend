import { Component, OnInit } from '@angular/core';
import { UniverzitetService } from '../services/univerzitet.service';
import { Univerzitet } from '../models/univerzitet';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-univerzitet',
  templateUrl: './univerzitet.component.html',
  styleUrls: ['./univerzitet.component.css'],
})
export class UniverzitetComponent implements OnInit {
  univerzitetPodaci: Univerzitet = {
    id: null,
    naziv: null,
    datumOsnivanja: null,
    opis: null,
    rektor: null,
    adresa: null,
    emailUniverziteta: null,
    telefonUniverziteta: null,
    fakulteti: null,
  };

  constructor(private us: UniverzitetService, private router: Router) {}

  ngOnInit(): void {
    this.us.getUniverzitet(1).subscribe((res) => {
      (this.univerzitetPodaci = res), console.log(res);
    });
  }
}
