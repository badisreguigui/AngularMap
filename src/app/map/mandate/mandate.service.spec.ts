import { TestBed, inject } from '@angular/core/testing';

import { MandateService } from './mandate.service';

describe('MandateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MandateService]
    });
  });

  it('should be created', inject([MandateService], (service: MandateService) => {
    expect(service).toBeTruthy();
  }));
});
