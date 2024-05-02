import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPackageComponent } from './admin-add-package.component';

describe('AdminAddPackageComponent', () => {
  let component: AdminAddPackageComponent;
  let fixture: ComponentFixture<AdminAddPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddPackageComponent]
    });
    fixture = TestBed.createComponent(AdminAddPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
