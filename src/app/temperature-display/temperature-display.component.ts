import { Component, Input } from '@angular/core';
import { CommonModule }      from '@angular/common';

@Component({
  selector: 'app-temperature-display',
  standalone: true,
  imports: [ CommonModule ],               // for *ngIf
  templateUrl: './temperature-display.component.html',
  styleUrls: ['./temperature-display.component.scss']
})
export class TemperatureDisplayComponent {
  @Input() loading = false;
  @Input() temperature: number | null = null;
  @Input() error: string | null = null;
  @Input() unit: 'C' | 'F' = 'C';
}
