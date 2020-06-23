import { TestBed } from '@angular/core/testing';

import { AdministrativnoOsobljeService } from './administrativno-osoblje.service';

describe('AdministrativnoOsobljeService', () => {
  let service: AdministrativnoOsobljeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrativnoOsobljeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
