import { Component, OnInit } from '@angular/core';
import { NastavniMaterijal } from '../models/nastavni-materijal';
import { NastavniMaterijalService } from '../services/nastavni-materijal.service';

@Component({
  selector: 'app-nastavni-materijali',
  templateUrl: './nastavni-materijali.component.html',
  styleUrls: ['./nastavni-materijali.component.css'],
})
export class NastavniMaterijaliComponent implements OnInit {
  nastavniMaterijal: NastavniMaterijal[];

  constructor(private nms: NastavniMaterijalService) {}

  ngOnInit(): void {
    this.nms
      .getNastavniMaterijal()
      .subscribe((r) => (this.nastavniMaterijal = r));
  }
}
