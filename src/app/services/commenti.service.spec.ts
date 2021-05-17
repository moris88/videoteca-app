import { TestBed } from '@angular/core/testing';

import { CommentiService } from './commenti.service';

describe('CommentiService', () => {
  let service: CommentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
