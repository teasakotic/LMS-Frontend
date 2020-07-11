import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorPanelEditAddNewComponent } from './administrator-panel-edit-add-new.component';

describe('AdministratorPanelEditAddNewComponent', () => {
  let component: AdministratorPanelEditAddNewComponent;
  let fixture: ComponentFixture<AdministratorPanelEditAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorPanelEditAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorPanelEditAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
