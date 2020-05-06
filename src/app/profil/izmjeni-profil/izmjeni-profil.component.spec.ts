import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmjeniProfilComponent } from './izmjeni-profil.component';

describe('IzmjeniProfilComponent', () => {
  let component: IzmjeniProfilComponent;
  let fixture: ComponentFixture<IzmjeniProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmjeniProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmjeniProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
