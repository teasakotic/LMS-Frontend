import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavniMaterijaliComponent } from './nastavni-materijali.component';

describe('NastavniMaterijaliComponent', () => {
  let component: NastavniMaterijaliComponent;
  let fixture: ComponentFixture<NastavniMaterijaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavniMaterijaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavniMaterijaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
