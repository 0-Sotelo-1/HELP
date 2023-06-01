import { TestBed } from '@angular/core/testing';

import { SisterCompaniesService } from './sister-companies.service';

describe('SisterCompaniesService', () => {
  let service: SisterCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SisterCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
