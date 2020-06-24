import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikPanelComponent } from './nastavnik-panel.component';

describe('NastavnikPanelComponent', () => {
  let component: NastavnikPanelComponent;
  let fixture: ComponentFixture<NastavnikPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
