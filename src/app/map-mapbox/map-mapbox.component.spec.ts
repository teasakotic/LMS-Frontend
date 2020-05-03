import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMapboxComponent } from './map-mapbox.component';

describe('MapMapboxComponent', () => {
  let component: MapMapboxComponent;
  let fixture: ComponentFixture<MapMapboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMapboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
