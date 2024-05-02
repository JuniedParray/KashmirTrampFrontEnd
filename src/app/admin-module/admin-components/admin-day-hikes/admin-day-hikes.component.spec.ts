import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDayHikesComponent } from './admin-day-hikes.component';

describe('AdminDayHikesComponent', () => {
  let component: AdminDayHikesComponent;
  let fixture: ComponentFixture<AdminDayHikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDayHikesComponent]
    });
    fixture = TestBed.createComponent(AdminDayHikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
