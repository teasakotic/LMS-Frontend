import { Component, OnInit } from '@angular/core';
import { Fakultet } from '../models/fakultet';
import { FakultetService } from '../services/fakultet.service';

@Component({
  selector: 'app-fakultet',
  templateUrl: './fakultet.component.html',
  styleUrls: ['./fakultet.component.css'],
})
export class FakultetComponent implements OnInit {
  fakulteti: Fakultet[] = [];

  constructor(private fs: FakultetService) {}

  ngOnInit(): void {
    this.fs.getFakulteti().subscribe((r) => (this.fakulteti = r));
  }
}
