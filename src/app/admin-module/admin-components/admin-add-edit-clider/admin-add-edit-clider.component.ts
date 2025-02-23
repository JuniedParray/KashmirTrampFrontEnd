import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SliderInfo } from '../../adminModels/adminSlider';


@Component({
  selector: 'app-admin-add-edit-clider',
  templateUrl: './admin-add-edit-clider.component.html',
  styleUrl: './admin-add-edit-clider.component.scss'
})

export class AdminAddEditSliderComponent {

  form!: FormGroup  ;
  selectedFile: File | null = null;
  imagePath: string | null = null; // To hold the relative path of the image

  constructor(
    public dialogRef: MatDialogRef<AdminAddEditSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SliderInfo,
    private fb: FormBuilder
  ) {
  }

 
  ngOnInit(): void {
    this.initializeForm();
    if (this.data) {
      this.form.patchValue(this.data);
      this.imagePath = this.data.imagePath; // If editing, load existing image path
    }
  }

  initializeForm(): void {
    this.form = this.fb.group({
      id:[0],
      imagePath: ['',[Validators.required]] // Holds the relative image path
    });
  }

 // Receive uploaded file name & path
  onFileUploaded(event: { fileName: string, filePath: string }) {
  this.imagePath = event.filePath;
  // Save file path in the form
  this.form.patchValue({ imagePath: this.imagePath });
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
