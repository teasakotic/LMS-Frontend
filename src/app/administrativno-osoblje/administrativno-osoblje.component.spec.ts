import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativnoOsobljeComponent } from './administrativno-osoblje.component';

describe('AdministrativnoOsobljeComponent', () => {
  let component: AdministrativnoOsobljeComponent;
  let fixture: ComponentFixture<AdministrativnoOsobljeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativnoOsobljeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativnoOsobljeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
