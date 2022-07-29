import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private externalApiServerUrl = environment.externalApiBaseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {
  }

  public getWeatherFromCityId(id: number): Observable<any> {
    return this.http.get(`${this.externalApiServerUrl}/weather?id=${id}&appid=${this.apiKey}&units=metric`)
  }
}
