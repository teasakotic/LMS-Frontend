import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakultetService } from '../services/fakultet.service';
import { Fakultet } from '../models/fakultet';
import { StudijskiProgram } from '../models/studijski-program';

@Component({
  selector: 'app-studijski-program',
  templateUrl: './studijski-program.component.html',
  styleUrls: ['./studijski-program.component.css'],
})
export class StudijskiProgramComponent implements OnInit {
  studjskiProgram: StudijskiProgram = {} as StudijskiProgram;

  constructor(private ac: ActivatedRoute, private fs: FakultetService) {}

  ngOnInit(): void {
    this.fs
      .getStudijskiProgramFakulteta(this.ac.snapshot.params['id'])
      .subscribe((r) => {
        this.studjskiProgram = r;
        console.log(this.studjskiProgram);
      });
  }
}
