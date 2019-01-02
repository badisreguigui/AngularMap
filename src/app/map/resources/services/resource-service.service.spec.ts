import { TestBed, inject } from '@angular/core/testing';

import { ResourceServiceService } from './resource-service.service';

describe('ResourceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceServiceService]
    });
  });

  it('should be created', inject([ResourceServiceService], (service: ResourceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
