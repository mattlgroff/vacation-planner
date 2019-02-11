import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketCalculatorPageComponent } from './ticket-calculator-page.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TicketCalculatorPageComponent', () => {
  let component: TicketCalculatorPageComponent;
  let fixture: ComponentFixture<TicketCalculatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
      ],
      declarations: [TicketCalculatorPageComponent],
    }).compileComponents();
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
