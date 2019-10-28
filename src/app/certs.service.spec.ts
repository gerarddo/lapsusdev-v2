import { TestBed } from '@angular/core/testing';

import { CertsService } from './certs.service';

describe('CertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CertsService = TestBed.get(CertsService);
    expect(service).toBeTruthy();
  });
});
