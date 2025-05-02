import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStationListComponent } from './weather-station-list.component';

describe('WeatherStationListComponent', () => {
  let component: WeatherStationListComponent;
  let fixture: ComponentFixture<WeatherStationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherStationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherStationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
