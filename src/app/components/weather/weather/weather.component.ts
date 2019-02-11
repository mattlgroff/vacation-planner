import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

export interface WeatherData {
  updateTime: Date;
  periods: Array<Forecast>;
}

export interface Forecast {
  number: number;
  name: string;
  startTime: Date;
  endTime: Date;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public forecasts: Array<Forecast>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe((data: WeatherData) => {
      this.forecasts = data.periods;
    });
  }
}
