export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
  lon: number;
  lat: number;
  cityName: string;
  cityId: number;
  country: string;
  dateTaken: Date;
  mainTemp: number;
  mainFeelsLike: number;
  mainTempMin: number;
  mainTempMax: number;
  mainPressure: number;
  mainHumidity: number;
  visibility: number;
  windSpeed: number;
  windDeg: number;
  cloudsAll: number;
  sunrise: Date;
  sunset: Date;
  timezone: string;
}
