import {Component, OnInit} from '@angular/core';
import {City} from "./city";
import {CityService} from "./city.service";
import {WeatherService} from "./weather.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Weather} from "./weather"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  public cities: City[] = [];
  selectedCity = this.cities[0];
  public weather: Weather = {
    cityId: 0,
    cityName: "",
    cloudsAll: 0,
    country: "",
    dateTaken: new Date(),
    description: "",
    icon: "",
    id: 0,
    lat: 0,
    lon: 0,
    main: "",
    mainFeelsLike: 0,
    mainHumidity: 0,
    mainPressure: 0,
    mainTemp: 0,
    mainTempMax: 0,
    mainTempMin: 0,
    sunrise: new Date(),
    sunset: new Date(),
    timezone: "0",
    visibility: 0,
    windDeg: 0,
    windSpeed: 0
  };


  constructor(private cityService: CityService, private weatherService: WeatherService) {
  }

  private static getDescription(city: City) {
    let cityContainer = document.getElementById("city-container")!;
    let cityTitle = document.getElementById("description-card-title")!;
    let cityDescription = document.getElementById("description-card-text")!;
    cityTitle.textContent = city.cityName;
    cityDescription.textContent = city.cityDescription;
    cityContainer.style.display = "block";
  }

  ngOnInit(): void {
    this.getCities();
  }

  public onSelect(city: City): void {
    AppComponent.getDescription(city);
    this.renderWeatherData(city).then(() => {

    });
  }

  public EpochToDate(epoch: number) {
    if (epoch < 10000000000)
      epoch *= 1000;
    let newEpoch = epoch + (new Date().getTimezoneOffset() * -1); //for timeZone
    return new Date(newEpoch);
  }

  public EpochToTimeZone(epoch: number) {
    // if (epoch < 10000000000)
    //   epoch *= 1000;
    let hours = Math.floor(epoch / 3600);
    let minutes = Math.abs((epoch / 60) % 60);
    let timeZone: string;
    if (hours < 0) {
      timeZone = "UTC" + hours.toString() + ":" + minutes.toString();
    } else {
      timeZone = "UTC+" + hours.toString() + ":" + minutes.toString()
    }
    return timeZone;
  }

  public getCities(): void {
    this.cityService.getCities().subscribe({
        next: (response: City[]) => {
          this.cities = response;
          // console.log(this.cities);
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
    )
  }

  private async renderWeatherData(city: City) {
    let [weatherData] = await Promise.all([this.getWeatherData(city)]);
    console.log(weatherData);
    this.weather = {
      cityId: weatherData.id,
      cityName: weatherData.name,
      cloudsAll: weatherData.clouds.all,
      country: weatherData.sys.country,
      dateTaken: this.EpochToDate(weatherData.dt),
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      id: weatherData.weather[0].id,
      lat: weatherData.coord.lat,
      lon: weatherData.coord.lon,
      main: weatherData.weather[0].main,
      mainFeelsLike: weatherData.main.feels_like,
      mainHumidity: weatherData.main.humidity,
      mainPressure: weatherData.main.pressure,
      mainTemp: weatherData.main.temp,
      mainTempMax: weatherData.main.temp_max,
      mainTempMin: weatherData.main.temp_min,
      sunrise: this.EpochToDate(weatherData.sys.sunrise),
      sunset: this.EpochToDate(weatherData.sys.sunset),
      timezone: this.EpochToTimeZone(weatherData.timezone),
      visibility: weatherData.visibility,
      windDeg: weatherData.wind.deg,
      windSpeed: weatherData.wind.speed
    }
    console.log(this.weather);
    let weatherContainer = document.getElementById("weather-container")!;
    weatherContainer.style.display = "block";
  }

  private getWeatherData(city: City) {
    return new Promise<any>((resolve) => {
      this.weatherService.getWeatherFromCityId(city.id).subscribe({
        next: (response: Object) => {
          // this.weatherData = response;
          // console.log("before: ", this.weatherData);
          resolve(response);
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      })
    });
  }
}
