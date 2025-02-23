import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponentComponent } from './teams-component.component';

describe('TeamsComponentComponent', () => {
  let component: TeamsComponentComponent;
  let fixture: ComponentFixture<TeamsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
