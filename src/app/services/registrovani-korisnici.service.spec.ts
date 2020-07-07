import { TestBed } from '@angular/core/testing';

import { RegistrovaniKorisniciService } from './registrovani-korisnici.service';

describe('RegistrovaniKorisniciService', () => {
  let service: RegistrovaniKorisniciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrovaniKorisniciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
