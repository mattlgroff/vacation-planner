import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, LandingRoutingModule, MatToolbarModule],
  declarations: [LandingPageComponent],
  providers: [],
})
export class LandingModule {}
