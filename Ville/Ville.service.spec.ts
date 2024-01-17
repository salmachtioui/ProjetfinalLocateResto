import { TestBed } from '@angular/core/testing';

import { VilleService } from './Ville.service';

describe('villeService', () => {
  let service: VilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
