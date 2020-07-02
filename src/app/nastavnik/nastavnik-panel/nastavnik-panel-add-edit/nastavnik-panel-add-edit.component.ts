import { Component, OnInit } from '@angular/core';
import { SilabusServiceService } from 'src/app/services/silabus-service.service';
import { Ishod } from 'src/app/models/ishod';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nastavnik-panel-add-edit',
  templateUrl: './nastavnik-panel-add-edit.component.html',
  styleUrls: ['./nastavnik-panel-add-edit.component.css'],
})
export class NastavnikPanelAddEditComponent implements OnInit {
  ishod = {} as Ishod;

  constructor(
    private ss: SilabusServiceService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ss
      .getOne(this.ar.snapshot.params['id'])
      .subscribe((r) => (this.ishod = r));
    console.log(this.ishod);
  }

  submitChange() {
    this.ss
      .update(this.ar.snapshot.params['id'], this.ishod)
      .subscribe((r) => console.log(r));
    this.router.navigate(['/nastavnik-panel']);
  }
}
