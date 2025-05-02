import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TemperatureDisplayComponent } from './temperature-display/temperature-display.component';
import { WeatherStationListComponent } from './weather-station-list/weather-station-list.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TemperatureDisplayComponent, WeatherStationListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle unit correctly', () => {
    const initial = component.unit;
    component.toggleUnit();
    expect(component.unit).not.toEqual(initial);
  });
});