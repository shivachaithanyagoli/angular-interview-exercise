import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule }                           from '@angular/common';
import { FormsModule }                            from '@angular/forms';
import { Station }                                from '../weather.models';

@Component({
  selector: 'app-weather-station-list',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './weather-station-list.component.html',
  styleUrls: ['./weather-station-list.component.scss']  // ← point to the .scss
})
export class WeatherStationListComponent {
  /** List of stations to render */
  @Input() stations: Station[] = [];
  /** Currently selected station ID */
  @Input() selectedId?: string;
  /** Emits when the user picks a station */
  @Output() stationSelected = new EventEmitter<string>();
}
