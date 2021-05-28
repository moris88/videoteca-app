import { TestBed } from '@angular/core/testing';

import { UrlServerService } from './server.service';

describe('UrlServerService', () => {
  let service: UrlServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
