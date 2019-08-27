import { TestBed } from '@angular/core/testing';

import { CompanyClientService } from './company-client.service';

describe('CompanyClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyClientService = TestBed.get(CompanyClientService);
    expect(service).toBeTruthy();
  });
});
