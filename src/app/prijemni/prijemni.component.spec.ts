import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijemniComponent } from './prijemni.component';

describe('PrijemniComponent', () => {
  let component: PrijemniComponent;
  let fixture: ComponentFixture<PrijemniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrijemniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijemniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
