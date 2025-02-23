import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEditGalleryComponent } from './admin-add-edit-gallery.component';

describe('AdminAddEditGalleryComponent', () => {
  let component: AdminAddEditGalleryComponent;
  let fixture: ComponentFixture<AdminAddEditGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddEditGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddEditGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
