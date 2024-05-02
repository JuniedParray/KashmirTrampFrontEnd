import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdventuresComponent } from './admin-adventures.component';

describe('AdminAdventuresComponent', () => {
  let component: AdminAdventuresComponent;
  let fixture: ComponentFixture<AdminAdventuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAdventuresComponent]
    });
    fixture = TestBed.createComponent(AdminAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
