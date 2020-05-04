import { TestBed } from '@angular/core/testing';

import { StoreTwitterService } from './store-twitter.service';

describe('StoreTwitterService', () => {
  let service: StoreTwitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTwitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
