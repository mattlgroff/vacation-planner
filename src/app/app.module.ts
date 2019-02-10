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
  MatTabsModule,
  MatCardModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TicketCalculatorComponent } from './components/ticket-calculator-page/ticket-calculator/ticket-calculator.component';
import { TicketCalculatorPageComponent } from './components/ticket-calculator-page/ticket-calculator-page.component';
import { CostsCalculatorPageComponent } from './components/costs-calculator-page/costs-calculator-page.component';
import { WaitTimesPageComponent } from './components/wait-times-page/wait-times-page.component';
import { WaitTimesComponent } from './components/wait-times-page/wait-times/wait-times.component';
import { WaitTimesService } from './components/wait-times-page/wait-times/wait-times.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    NavbarComponent,
    LandingPageComponent,
    TicketCalculatorComponent,
    TicketCalculatorPageComponent,
    CostsCalculatorPageComponent,
    WaitTimesPageComponent,
    WaitTimesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [WaitTimesService],
  bootstrap: [NavbarComponent],
})
export class AppModule {}
