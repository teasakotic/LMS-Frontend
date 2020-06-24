import { Component, OnInit } from '@angular/core';
import { Nastavnik } from 'src/app/models/nastavnik';
import { NastavnikService } from 'src/app/services/nastavnik.service';
import { Predmet } from 'src/app/models/predmet';
import { Ishod } from 'src/app/models/ishod';

@Component({
  selector: 'app-nastavnik-panel',
  templateUrl: './nastavnik-panel.component.html',
  styleUrls: ['./nastavnik-panel.component.css'],
})
export class NastavnikPanelComponent implements OnInit {
  nastavnik: Nastavnik = {} as Nastavnik;
  predmeti: Predmet[] = [];
  silabus = [];
  constructor(private ns: NastavnikService) {}

  ngOnInit(): void {
    this.ns.getNastavnik(1).subscribe((res) => {
      this.nastavnik = res;
      this.predmeti = res.studijskiProgram.godinaStudija.predmeti;
      res.studijskiProgram.godinaStudija.predmeti.forEach((s) =>
        this.silabus.push(s.silabus)
      );
      console.log(this.silabus);
    });
  }
}
