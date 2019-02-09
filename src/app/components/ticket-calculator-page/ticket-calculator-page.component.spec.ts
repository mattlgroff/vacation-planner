import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCalculatorPageComponent } from './ticket-calculator-page.component';

describe('TicketCalculatorPageComponent', () => {
  let component: TicketCalculatorPageComponent;
  let fixture: ComponentFixture<TicketCalculatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCalculatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
