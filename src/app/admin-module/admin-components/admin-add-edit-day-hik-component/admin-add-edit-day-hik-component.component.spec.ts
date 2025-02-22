import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEditDayHikeComponentComponent } from './admin-add-edit-day-hik-component.component';

describe('AdminAddEditDayHikeComponentComponent', () => {
  let component: AdminAddEditDayHikeComponentComponent;
  let fixture: ComponentFixture<AdminAddEditDayHikeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddEditDayHikeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddEditDayHikeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
