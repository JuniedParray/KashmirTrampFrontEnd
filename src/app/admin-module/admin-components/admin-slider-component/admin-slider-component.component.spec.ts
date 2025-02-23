import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSliderComponentComponent } from './admin-slider-component.component';

describe('AdminSliderComponentComponent', () => {
  let component: AdminSliderComponentComponent;
  let fixture: ComponentFixture<AdminSliderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSliderComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
