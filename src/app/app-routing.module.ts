import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/landing/landing.module#LandingModule',
  },
  {
    path: 'ticket-calculator',
    loadChildren:
      './components/ticket-calculator/ticket-calculator.module#TicketCalculatorModule',
  },
  {
    path: 'wait-times',
    loadChildren: './components/wait-times/wait-times.module#WaitTimesModule',
  },
  {
    path: 'weather',
    loadChildren: './components/weather/weather.module#WeatherModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
