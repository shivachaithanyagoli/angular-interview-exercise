import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WeatherStationListComponent } from './weather-station-list.component';
import { By } from '@angular/platform-browser';

describe('WeatherStationListComponent', () => {
  let component: WeatherStationListComponent;
  let fixture: ComponentFixture<WeatherStationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherStationListComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherStationListComponent);
    component = fixture.componentInstance;
    component.stations = [
      { name: 'Station 1', stationIdentifier: 'S1' },
      { name: 'Station 2', stationIdentifier: 'S2' }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected station', () => {
    spyOn(component.stationSelected, 'emit');
    component.selectedId = 'S2';
    fixture.detectChanges();

    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));

    expect(component.stationSelected.emit).toHaveBeenCalledWith('S2');
  });
});