import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudijskiProgramComponent } from './studijski-program.component';

describe('StudijskiProgramComponent', () => {
  let component: StudijskiProgramComponent;
  let fixture: ComponentFixture<StudijskiProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudijskiProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudijskiProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
