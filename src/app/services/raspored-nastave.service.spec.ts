import { TestBed } from '@angular/core/testing';

import { RasporedNastaveService } from './raspored-nastave.service';

describe('RasporedNastaveService', () => {
  let service: RasporedNastaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RasporedNastaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
