import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey=`4cd44bb5b0ae3c70e3015daff948080e`;
  URI:string;
  constructor(private http: HttpClient) {
    this.URI=`http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
   }

   getWeather(cityName:string, countryCode:string){
     return this.http.get(`${this.URI}${cityName},${countryCode}`);
   }
}
