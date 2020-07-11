import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administrator-panel-edit-add-new',
  templateUrl: './administrator-panel-edit-add-new.component.html',
  styleUrls: ['./administrator-panel-edit-add-new.component.css'],
})
export class AdministratorPanelEditAddNewComponent implements OnInit {
  constructor(private http: HttpClient, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.ar.snapshot.params['id']);
  }
}
