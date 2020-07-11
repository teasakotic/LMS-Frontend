import { Component, OnInit } from '@angular/core';
import { NastavniMaterijal } from '../models/nastavni-materijal';
import { NastavniMaterijalService } from '../services/nastavni-materijal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nastavni-materijali',
  templateUrl: './nastavni-materijali.component.html',
  styleUrls: ['./nastavni-materijali.component.css'],
})
export class NastavniMaterijaliComponent implements OnInit {
  nastavniMaterijal = {} as NastavniMaterijal;

  constructor(
    private nms: NastavniMaterijalService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.nms
      .getNastavniMaterijal(this.ar.snapshot.params['id'])
      .subscribe((r) => {
        this.nastavniMaterijal = r;
        console.log(this.nastavniMaterijal);
      });
  }
}
