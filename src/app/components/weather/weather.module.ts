import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { MatCardModule } from '@angular/material';
import { WeatherService } from './weather/weather.service';

@NgModule({
  imports: [CommonModule, WeatherRoutingModule, MatCardModule],
  declarations: [WeatherComponent],
  providers: [WeatherService],
})
export class WeatherModule {}
