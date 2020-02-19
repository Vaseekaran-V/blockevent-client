import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTicketComponent } from './transfer-ticket.component';

describe('TransferTicketComponent', () => {
  let component: TransferTicketComponent;
  let fixture: ComponentFixture<TransferTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
