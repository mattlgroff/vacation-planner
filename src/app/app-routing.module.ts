import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketCalculatorPageComponent } from './components/ticket-calculator-page/ticket-calculator-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CostsCalculatorPageComponent } from './components/costs-calculator-page/costs-calculator-page.component';
import { WaitTimesPageComponent } from './components/wait-times-page/wait-times-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ticket-calculator', component: TicketCalculatorPageComponent },
  { path: 'costs-calculator', component: CostsCalculatorPageComponent },
  { path: 'wait-times', component: WaitTimesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
