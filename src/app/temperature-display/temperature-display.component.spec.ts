import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureDisplayComponent } from './temperature-display.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TemperatureDisplayComponent', () => {
  let component: TemperatureDisplayComponent;
  let fixture: ComponentFixture<TemperatureDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureDisplayComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperatureDisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Loading');
  });

  it('should display error message', () => {
    component.loading = false;
    component.error = 'Test error';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test error');
  });

  it('should show temperature', () => {
    component.loading = false;
    component.temperature = 22;
    component.unit = 'C';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('22°C');
  });
});