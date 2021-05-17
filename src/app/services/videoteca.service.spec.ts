import { TestBed } from '@angular/core/testing';

import { VideotecaService } from './videoteca.service';

describe('VideotecaService', () => {
  let service: VideotecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideotecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
