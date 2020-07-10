import { Component, OnInit } from '@angular/core';
import { Fakultet } from '../models/fakultet';
import { FakultetService } from '../services/fakultet.service';
import { Email } from '../models/email';
import { Telefon } from '../models/telefon';

@Component({
  selector: 'app-fakultet',
  templateUrl: './fakultet.component.html',
  styleUrls: ['./fakultet.component.css'],
})
export class FakultetComponent implements OnInit {
  fakulteti: Fakultet[] = [];
  emails: Email[] = [];
  telefon: Telefon[] = [];

  constructor(private fs: FakultetService) {}

  ngOnInit(): void {
    this.fs.getFakulteti().subscribe((r) => {
      this.fakulteti = r;
    });
  }
}
