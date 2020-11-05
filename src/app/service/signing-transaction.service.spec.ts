import { TestBed } from '@angular/core/testing';

import { SigningTransactionService } from './signing-transaction.service';

describe('SigningTransactionService', () => {
  let service: SigningTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigningTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
