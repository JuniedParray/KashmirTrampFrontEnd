import { Component, Inject } from '@angular/core';
import { AdminTourPackage } from '../../adminModels/adminTourPackageModel';
import { AdminDialogService } from '../../adminServices/admin-dialog-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-add-edit-package',
  templateUrl: './admin-add-edit-package.component.html',
  styleUrl: './admin-add-edit-package.component.scss'
})
export class AdminAddEditPackageComponent {
  tourPackage: AdminTourPackage
dialogTitle: any;

  
  constructor(public dialogRef: MatDialogRef<AdminAddEditPackageComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {
  // If data is passed, initialize tourPackage with it (for editing)
  this.tourPackage = data && data.tourPackage ? data.tourPackage : { name: '', description: '' };
}

ngOnInit(): void {
}

onClose(): void {
  this.dialogRef.close();
}

saveTourPackage(): void {
  // Determine if it's an add or edit operation based on the presence of tour package data
  const isAddOperation = !this.data || !this.data.tourPackage;
  if (isAddOperation) {
    // Add logic for adding tour package
    console.log('Adding tour package:', this.tourPackage);
  } else {
    // Add logic for editing tour package
    console.log('Editing tour package:', this.tourPackage);
  }
  this.dialogRef.close(this.tourPackage);
}
}
