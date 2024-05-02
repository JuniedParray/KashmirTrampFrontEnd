import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactInfoComponent } from './admin-contact-info.component';

describe('AdminContactInfoComponent', () => {
  let component: AdminContactInfoComponent;
  let fixture: ComponentFixture<AdminContactInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminContactInfoComponent]
    });
    fixture = TestBed.createComponent(AdminContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
