import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    NguCarouselModule,
    MatToolbarModule,
  ],
  declarations: [LandingPageComponent, CarouselComponent],
})
export class LandingModule {}
