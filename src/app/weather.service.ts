// src/app/weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Station, Observation } from './weather.models';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly base = 'https://api.weather.gov';

  constructor(private http: HttpClient) {}

  /** 
   * Two‐step fetch: first get the point metadata, then follow its stations URL,
   * finally returning a raw Station[].
   */
  getStations(lat: number, lon: number): Observable<Station[]> {
    // 1) Fetch point metadata
    return this.http
      .get<{ properties: { observationStations: string } }>(
        `${this.base}/points/${lat},${lon}`
      )
      .pipe(
        // 2) Grab the observationStations URL
        map(resp => resp.properties.observationStations),
        // 3) Fetch that URL to get the station collection
        switchMap(stationsUrl =>
          this.http.get<{ features: { properties: Station }[] }>(stationsUrl)
        ),
        // 4) Map to Station[]
        map(col => col.features.map(f => f.properties))
      );
  }

  /** Fetch the latest observation for a given station ID */
  getLatest(stationId: string): Observable<Observation> {
    return this.http.get<Observation>(
      `${this.base}/stations/${stationId}/observations/latest`
    );
  }
}
