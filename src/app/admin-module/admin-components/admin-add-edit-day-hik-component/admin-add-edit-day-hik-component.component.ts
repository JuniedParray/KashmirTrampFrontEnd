import { Component, Inject } from '@angular/core';
import { AdminDayHike } from '../../adminModels/adminDayHike';
import { AdminDayHikesService } from '../../adminServices/admin-dayHikes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-add-edit-day-hik-component',
  templateUrl: './admin-add-edit-day-hik-component.component.html',
  styleUrl: './admin-add-edit-day-hik-component.component.scss'
})
export class AdminAddEditDayHikeComponentComponent {

  form!: FormGroup  ;
  selectedFile: File | null = null;
  imagePath: string | null = null; // To hold the relative path of the image

  constructor(
    public dialogRef: MatDialogRef<AdminAddEditDayHikeComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminDayHike,
    private fb: FormBuilder,private service : AdminDayHikesService
  ) {
  }

 
  ngOnInit(): void {
    this.initializeForm();
    if (this.data) {
      this.form.patchValue(this.data);
      this.imagePath = this.data.image; // If editing, load existing image path
    }
  }

  initializeForm(): void {
    this.form = this.fb.group({
      id:[0],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
      distance: [0, [Validators.min(0)]],
      destination: [''],
      image: [''] // Holds the relative image path
    });
  }

 // Receive uploaded file name & path
 onFileUploaded(event: { fileName: string, filePath: string }) {
  this.imagePath = event.filePath;
  // Save file path in the form
  this.form.patchValue({ image: this.imagePath });
}

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}