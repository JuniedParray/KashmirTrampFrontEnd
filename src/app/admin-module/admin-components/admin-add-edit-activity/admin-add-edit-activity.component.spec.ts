import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEditActivityComponent } from './admin-add-edit-activity.component';

describe('AdminAddEditActivityComponent', () => {
  let component: AdminAddEditActivityComponent;
  let fixture: ComponentFixture<AdminAddEditActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddEditActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddEditActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
