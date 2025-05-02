import { Component, OnInit } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { WeatherService }     from './weather.service';
import { Station }            from './weather.models';
import { WeatherStationListComponent }      from './weather-station-list/weather-station-list.component';
import { TemperatureDisplayComponent }      from './temperature-display/temperature-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,                 // for *ngIf, *ngFor, json pipe
    FormsModule,                  // for [(ngModel)]
    WeatherStationListComponent,  // renders the dropdown
    TemperatureDisplayComponent   // renders loading/temp/error
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stations: Station[]        = [];
  selectedId: string         = '';
  currentTemp: number | null = null;
  displayTemp: number | null = null;
  loading = false;
  error: string | null = null;

  // unit toggle
  unit: 'C' | 'F' = 'C';

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {
    this.loadStations(47.6062, -122.3321);
  }

  toggleUnit(): void {
    this.unit = this.unit === 'C' ? 'F' : 'C';
    if (this.currentTemp !== null) {
      this.displayTemp = this.convert(this.currentTemp);
    }
  }

  private convert(celsius: number): number {
    return this.unit === 'C'
      ? celsius
      : parseFloat(((celsius * 9/5) + 32).toFixed(1));
  }

  private loadStations(lat: number, lon: number): void {
    this.loading = true;
    this.weather.getStations(lat, lon).subscribe({
      next: stations => {
        this.stations = stations;
        this.loading  = false;
      },
      error: () => {
        this.error   = 'Could not load stations';
        this.loading = false;
      }
    });
  }

  onSelect(stationId: string): void {
    if (!stationId) return;
    this.loading     = true;
    this.currentTemp = null;
    this.displayTemp = null;
    this.error       = null;

    this.weather.getLatest(stationId).subscribe({
      next: obs => {
        this.currentTemp = obs.properties.temperature.value;
        if (this.currentTemp !== null) {
          this.displayTemp = this.convert(this.currentTemp);
        }
        this.loading = false;
      },
      error: () => {
        this.error   = 'Could not load temperature';
        this.loading = false;
      }
    });
  }
}
