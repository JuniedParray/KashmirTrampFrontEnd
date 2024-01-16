import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayhikesInfoComponent } from './dayhikes-info.component';

describe('DayhikesInfoComponent', () => {
  let component: DayhikesInfoComponent;
  let fixture: ComponentFixture<DayhikesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayhikesInfoComponent]
    });
    fixture = TestBed.createComponent(DayhikesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
