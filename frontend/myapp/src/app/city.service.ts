import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "./city";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiServerUrl}/city/all`)
  }

  public getCityDescription(city: City): Observable<City> {
    return this.http.get<City>(`${this.apiServerUrl}/city/${city.id}`);
  }

}
