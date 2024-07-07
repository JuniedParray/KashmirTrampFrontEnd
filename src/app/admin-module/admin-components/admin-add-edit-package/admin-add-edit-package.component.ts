import { Component, Inject, OnInit } from '@angular/core';
import { AdminTourPackage } from '../../adminModels/adminTourPackageModel';
import { AdminDialogService } from '../../adminServices/admin-dialog-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-edit-package',
  templateUrl: './admin-add-edit-package.component.html',
  styleUrl: './admin-add-edit-package.component.scss'
})
export class AdminAddEditPackageComponent implements OnInit {
  tourPackageForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminAddEditPackageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminTourPackage,
    private fb: FormBuilder
  ) {
    this.tourPackageForm = this.fb.group({
      id :[''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.tourPackageForm.patchValue(this.data);
    }
  }

  onSave(): void {
    if (this.tourPackageForm.valid) {
      this.dialogRef.close(this.tourPackageForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}