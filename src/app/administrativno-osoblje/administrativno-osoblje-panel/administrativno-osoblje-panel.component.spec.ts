import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativnoOsobljePanelComponent } from './administrativno-osoblje-panel.component';

describe('AdministrativnoOsobljePanelComponent', () => {
  let component: AdministrativnoOsobljePanelComponent;
  let fixture: ComponentFixture<AdministrativnoOsobljePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativnoOsobljePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativnoOsobljePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
