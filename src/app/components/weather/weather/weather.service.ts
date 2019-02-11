import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://wait-times.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getWeather() {
    return this.http.get(`${baseUrl}weather`);
  }
}
