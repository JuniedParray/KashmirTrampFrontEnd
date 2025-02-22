import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Destination } from 'src/app/models/destination';
import { AdminDestination } from '../../adminModels/adminDestination';
import { AdminDestinationsService } from '../../adminServices/admin-destinations.service';

@Component({
  selector: 'app-admin-add-edit-destination',
  templateUrl: './admin-add-edit-destination.component.html',
  styleUrl: './admin-add-edit-destination.component.scss'
})

export class AdminAddEditDestinationComponent implements OnInit {
  destinationForm!: FormGroup  ;
  selectedFile: File | null = null;
  imagePath: string | null = null; // To hold the relative path of the image

  constructor(
    public dialogRef: MatDialogRef<AdminAddEditDestinationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminDestination,
    private fb: FormBuilder,private destinationService : AdminDestinationsService
  ) {
  }

 
  ngOnInit(): void {
    this.initializeForm();
    if (this.data) {
      this.destinationForm.patchValue(this.data);
      this.imagePath = this.data.image; // If editing, load existing image path
    }
  }

  initializeForm(): void {
    this.destinationForm = this.fb.group({
      id:[0],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      discount: [0, [Validators.min(0)]],
      image: [''] // Holds the relative image path
    });
  }

 // Receive uploaded file name & path
 onFileUploaded(event: { fileName: string, filePath: string }) {
  this.imagePath = event.filePath;
  // Save file path in the form
  this.destinationForm.patchValue({ image: this.imagePath });
}

  onSave(): void {
    if (this.destinationForm.valid) {
      this.dialogRef.close(this.destinationForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
