import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketCalculatorRoutingModule } from './ticket-calculator-routing.module';
import { TicketCalculatorPageComponent } from './ticket-calculator-page/ticket-calculator-page.component';

@NgModule({
  declarations: [TicketCalculatorPageComponent],
  imports: [CommonModule, TicketCalculatorRoutingModule],
})
export class TicketCalculatorModule {}
