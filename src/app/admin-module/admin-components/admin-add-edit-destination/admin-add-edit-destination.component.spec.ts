import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEditDestinationComponent } from './admin-add-edit-destination.component';

describe('AdminAddEditDestinationComponent', () => {
  let component: AdminAddEditDestinationComponent;
  let fixture: ComponentFixture<AdminAddEditDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddEditDestinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddEditDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
