import { TestBed } from '@angular/core/testing';

import { FakebookService } from './fakebook.service';

describe('FakebookService', () => {
  let service: FakebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
