import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RegistrovaniKorisnik } from 'src/app/models/registrovani-korisnik';
import { RegistrovaniKorisniciService } from 'src/app/services/registrovani-korisnici.service';

@Component({
  selector: 'app-administrator-panel-edit-add-new',
  templateUrl: './administrator-panel-edit-add-new.component.html',
  styleUrls: ['./administrator-panel-edit-add-new.component.css'],
})
export class AdministratorPanelEditAddNewComponent implements OnInit {
  kor: RegistrovaniKorisnik = {} as RegistrovaniKorisnik;

  constructor(
    private http: HttpClient,
    private ar: ActivatedRoute,
    private rgs: RegistrovaniKorisniciService
  ) {}

  ngOnInit(): void {
    this.rgs
      .getKorisnik(this.ar.snapshot.params['id'])
      .subscribe((response) => {
        this.kor = response;
      });
  }

  izmjena() {
    this.rgs
      .change(this.ar.snapshot.params['id'], this.kor)
      .subscribe((res) => this.ngOnInit());
  }
}
