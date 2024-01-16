import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayHikesComponent } from './day-hikes.component';

describe('DayHikesComponent', () => {
  let component: DayHikesComponent;
  let fixture: ComponentFixture<DayHikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayHikesComponent]
    });
    fixture = TestBed.createComponent(DayHikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
