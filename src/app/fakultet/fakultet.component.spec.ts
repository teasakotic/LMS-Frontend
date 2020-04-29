import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultetComponent } from './fakultet.component';

describe('FakultetComponent', () => {
  let component: FakultetComponent;
  let fixture: ComponentFixture<FakultetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
