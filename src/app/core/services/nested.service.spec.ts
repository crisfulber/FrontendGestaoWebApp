import { TestBed } from '@angular/core/testing';

import { NestedService } from './nested.service';

describe('NestedService', () => {
  let service: NestedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
