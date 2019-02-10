import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketCalculatorPageComponent } from './ticket-calculator-page/ticket-calculator-page.component';

const routes: Routes = [{ path: '', component: TicketCalculatorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketCalculatorRoutingModule {}
