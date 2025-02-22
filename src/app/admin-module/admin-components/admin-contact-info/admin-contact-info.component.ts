import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactInfo } from '../../adminModels/adminAbout';

@Component({
  selector: 'app-admin-contact-info',
  templateUrl: './admin-contact-info.component.html',
  styleUrls: ['./admin-contact-info.component.scss']
})
export class AdminContactInfoComponent implements OnInit {
  form!: FormGroup  ;

  constructor(
    public dialogRef: MatDialogRef<AdminContactInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactInfo,
    private fb: FormBuilder
  ) {
  }

 
  ngOnInit(): void {
    this.initializeForm();
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  initializeForm(): void {
    this.form = this.fb.group({
      address: ['', Validators.required],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fbLink: [''],
      instaLink: [''],
      youTubeLink: [''],
      aboutUs: ['', Validators.required],
      logoPath: ['']
    });
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

