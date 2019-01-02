import { TestBed, inject } from '@angular/core/testing';

import { ResourceRequestService } from './resource-request.service';

describe('ResourceRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceRequestService]
    });
  });

  it('should be created', inject([ResourceRequestService], (service: ResourceRequestService) => {
    expect(service).toBeTruthy();
  }));
});
