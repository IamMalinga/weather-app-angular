import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}
  getWeatherData(cityName: string ): Observable<WeatherData> {
      return this.http.get<WeatherData>("https://open-weather13.p.rapidapi.com/city/"+cityName,{
        headers: new HttpHeaders().set("X-RapidAPI-Host", "open-weather13.p.rapidapi.com").set("X-RapidAPI-Key", "ee990d0f36msh5a336806858ea40p14d0f5jsnf6723df4b8b6"),
      })
    }
}
