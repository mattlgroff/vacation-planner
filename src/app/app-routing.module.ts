import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'ticket-calculator',
    loadChildren:
      './components/ticket-calculator/ticket-calculator.module#TicketCalculatorModule',
  },
  {
    path: 'wait-times',
    loadChildren: './components/wait-times/wait-times.module#WaitTimesModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
