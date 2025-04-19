import { TestBed } from '@angular/core/testing';

import { UniverstiesService } from './universties.service';

describe('UniverstiesService', () => {
  let service: UniverstiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniverstiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
