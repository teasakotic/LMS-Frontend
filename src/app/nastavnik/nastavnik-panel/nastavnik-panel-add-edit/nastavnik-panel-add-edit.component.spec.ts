import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikPanelAddEditComponent } from './nastavnik-panel-add-edit.component';

describe('NastavnikPanelAddEditComponent', () => {
  let component: NastavnikPanelAddEditComponent;
  let fixture: ComponentFixture<NastavnikPanelAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikPanelAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikPanelAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
