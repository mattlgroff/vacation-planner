import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TicketCalculatorComponent } from './components/ticket-calculator-page/ticket-calculator/ticket-calculator.component';
import { TicketCalculatorPageComponent } from './components/ticket-calculator-page/ticket-calculator-page.component';
import { CostsCalculatorPageComponent } from './components/costs-calculator-page/costs-calculator-page.component';
import { WaitTimesPageComponent } from './components/wait-times-page/wait-times-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LandingPageComponent,
    TicketCalculatorComponent,
    TicketCalculatorPageComponent,
    CostsCalculatorPageComponent,
    WaitTimesPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [NavbarComponent],
})
export class AppModule {}
