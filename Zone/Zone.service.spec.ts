import { TestBed } from '@angular/core/testing';

import { ZoneService } from './Zone.service';

describe('zoneService', () => {
  let service: ZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
