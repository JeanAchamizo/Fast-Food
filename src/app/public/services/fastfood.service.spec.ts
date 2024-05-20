import { TestBed } from '@angular/core/testing';

import { FastfoodService } from './fastfood.service';

describe('FastfoodService', () => {
  let service: FastfoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastfoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
