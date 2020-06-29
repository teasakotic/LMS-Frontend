import { TestBed } from '@angular/core/testing';

import { AkademskiKalendarService } from './akademski-kalendar.service';

describe('AkademskiKalendarService', () => {
  let service: AkademskiKalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkademskiKalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
