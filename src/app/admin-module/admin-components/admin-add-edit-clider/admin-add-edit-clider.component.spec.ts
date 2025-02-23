import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEditCliderComponent } from './admin-add-edit-clider.component';

describe('AdminAddEditCliderComponent', () => {
  let component: AdminAddEditCliderComponent;
  let fixture: ComponentFixture<AdminAddEditCliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddEditCliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddEditCliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
