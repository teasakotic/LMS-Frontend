import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Nastavnik } from 'src/app/models/nastavnik';
import { NastavnikService } from 'src/app/services/nastavnik.service';
import { Predmet } from 'src/app/models/predmet';
import { Ishod } from 'src/app/models/ishod';
import { SilabusServiceService } from 'src/app/services/silabus-service.service';
import { LicniPodaci } from 'src/app/models/licni-podaci';
import { NastavnikNaRealizacijiService } from 'src/app/services/nastavnik-na-realizaciji.service';
import { PredmetiService } from 'src/app/services/predmeti.service';

@Component({
  selector: 'app-nastavnik-panel',
  templateUrl: './nastavnik-panel.component.html',
  styleUrls: ['./nastavnik-panel.component.css'],
})
export class NastavnikPanelComponent implements OnInit {
  nastavnik: Nastavnik = {
    licniPodaci: {
      ime: null,
    } as LicniPodaci,
  } as Nastavnik;
  predmeti: Predmet[] = [];

  // Predmeti
  dataSourcePredmeti;
  displayedColumnsPredmeti: string[];
  // Silabus
  dataSourceSilabus = [];
  displayedColumnsSilabus: string[];

  constructor(
    private ns: NastavnikService,
    private ps: PredmetiService,
    private nnrs: NastavnikNaRealizacijiService
  ) {}

  ngOnInit(): void {
    this.ns.getNastavnik(1).subscribe((res) => {
      // this.nastavnik = res;
      // this.predmeti = res.studijskiProgram.godinaStudija.predmeti;
      // this.dataSourcePredmeti = res.studijskiProgram.godinaStudija.predmeti;
      // res.studijskiProgram.godinaStudija.predmeti.map((x) =>
      //   this.dataSourceSilabus.push(x.silabus)
      // );
      // this.ss.getAll().subscribe((r) => this.dataSourceSilabus.push(r));
    });

    this.nnrs.getNastavnik(1).subscribe((r) => {
      this.nastavnik = r.nastavnik;
      this.predmeti.push(r.realizacijaPredmeta.predmet);
      this.dataSourcePredmeti = this.predmeti;
      console.log(this.predmeti);
      

      this.displayedColumnsPredmeti = [
        'naziv',
        'espb',
        'brojPredavanja',
        'brojVezbi',
        'istrazivackiRad',
      ];

      this.ps.getSilabus(1).subscribe((r) => {
        this.dataSourceSilabus.push(r);
      });
      console.log(this.dataSourceSilabus);
      
      this.displayedColumnsSilabus = ['opis', 'nedelja', 'akcije'];
    });
  }

  // TODO: Uncomment after providing service
  // delete(id: number) {
  //   this.servis.delete(id).subscribe((r) => console.log('Uspesno brisanje'));
  // }
}
