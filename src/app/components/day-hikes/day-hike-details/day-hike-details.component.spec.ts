import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayHikeDetailsComponent } from './day-hike-details.component';

describe('DayHikeDetailsComponent', () => {
  let component: DayHikeDetailsComponent;
  let fixture: ComponentFixture<DayHikeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayHikeDetailsComponent]
    });
    fixture = TestBed.createComponent(DayHikeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
