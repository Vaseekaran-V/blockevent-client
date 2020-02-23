import { TestBed } from '@angular/core/testing';

import { TransferTicketService } from './transfer-ticket.service';

describe('TransferTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferTicketService = TestBed.get(TransferTicketService);
    expect(service).toBeTruthy();
  });
});
