import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../model/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService){
    
  }

  cityName: string = "Colombo";
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({ next: (res)  => {
      this.weatherData = res;
      console.log(res)
    }})
  }

}
