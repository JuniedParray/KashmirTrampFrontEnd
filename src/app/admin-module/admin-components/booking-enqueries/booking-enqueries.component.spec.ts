import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEnqueriesComponent } from './booking-enqueries.component';

describe('BookingEnqueriesComponent', () => {
  let component: BookingEnqueriesComponent;
  let fixture: ComponentFixture<BookingEnqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingEnqueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingEnqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
