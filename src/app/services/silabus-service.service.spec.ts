import { TestBed } from '@angular/core/testing';

import { SilabusServiceService } from './silabus-service.service';

describe('SilabusServiceService', () => {
  let service: SilabusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SilabusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
