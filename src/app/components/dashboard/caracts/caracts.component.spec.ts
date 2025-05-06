import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractsComponent } from './caracts.component';

describe('CaractsComponent', () => {
  let component: CaractsComponent;
  let fixture: ComponentFixture<CaractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaractsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
