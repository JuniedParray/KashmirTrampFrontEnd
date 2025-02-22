import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Destination } from 'src/app/models/destination';
import { AdventureActivity } from '../../adminModels/adventureActivity';
import { AdminActivityService } from '../../adminServices/admin-activity.service';

@Component({
  selector: 'app-admin-add-edit-activity',
  templateUrl: './admin-add-edit-activity.component.html',
  styleUrl: './admin-add-edit-activity.component.scss'
})
export class AdminAddEditActivityComponent implements OnInit {
  activityForm!: FormGroup  ;
  destinations: Destination[] = [];
  selectedFile: File | null = null;
  imagePath: string | null = null; // To hold the relative path of the image

  constructor(
    public dialogRef: MatDialogRef<AdminAddEditActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdventureActivity,
    private fb: FormBuilder,private activityService : AdminActivityService
  ) {
  }

 
  ngOnInit(): void {
    this.initializeForm();
    this.fetchDestinations();
    if (this.data) {
      this.activityForm.patchValue(this.data);
      this.imagePath = this.data.image; // If editing, load existing image path
    }
  }

  initializeForm(): void {
    this.activityForm = this.fb.group({
      id:[0],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      destinationId: [null, [Validators.required]],
      image: [''] // Holds the relative image path
    });
  }
  fetchDestinations(): void {
    this.activityService.getDestinations()
      .subscribe((data) => {
        this.destinations = data;
      });
  }

   // Receive uploaded file name & path
 onFileUploaded(event: { fileName: string, filePath: string }) {
  this.imagePath = event.filePath;
  // Save file path in the form
  this.activityForm.patchValue({ image: this.imagePath });
}

  onSave(): void {
    if (this.activityForm.valid) {
      this.dialogRef.close(this.activityForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
