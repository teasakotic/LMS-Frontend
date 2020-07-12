import { TestBed } from '@angular/core/testing';

import { NastavnikNaRealizacijiService } from './nastavnik-na-realizaciji.service';

describe('NastavnikNaRealizacijiService', () => {
  let service: NastavnikNaRealizacijiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NastavnikNaRealizacijiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
