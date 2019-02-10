import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketCalculatorRoutingModule } from './ticket-calculator-routing.module';
import { TicketCalculatorPageComponent } from './ticket-calculator-page/ticket-calculator-page.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TicketCalculatorRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [TicketCalculatorPageComponent],
})
export class TicketCalculatorModule {}
