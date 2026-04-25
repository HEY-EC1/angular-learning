import { TestBed } from '@angular/core/testing';

import { ShainichiranService } from './shainichiran.service';

describe('ShainichiranService', () => {
  let service: ShainichiranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShainichiranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
