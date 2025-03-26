import { Component, Inject, OnInit } from '@angular/core';
import { AdminTourPackage } from '../../adminModels/adminTourPackageModel';
import { AdminDialogService } from '../../adminServices/admin-dialog-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminTourPackageService } from '../../adminServices/admin-tour-package.service';
import { Destination } from 'src/app/models/destination';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-add-edit-package',
  templateUrl: './admin-add-edit-package.component.html',
  styleUrls: ['./admin-add-edit-package.component.scss']
})
export class AdminAddEditPackageComponent implements OnInit {
  tourPackageForm!: FormGroup  ;
  destinations: Destination[] = [];
  selectedFile: File | null = null;
  imagePath: string | null = null; // To hold the relative path of the image
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '150',
      minHeight: '150',
      maxHeight: 'auto',
    width: 'auto',
    toolbarHiddenButtons: [
      ['insertImage', 'insertVideo'] // Removes image and video icons
    ],
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
   
    
};
  constructor(
    public dialogRef: MatDialogRef<AdminAddEditPackageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminTourPackage,
    private fb: FormBuilder,private packageService : AdminTourPackageService
  ) {
  }

 
  ngOnInit(): void {
    this.initializeForm();
    this.fetchDestinations();
    if (this.data) {
      this.tourPackageForm.patchValue(this.data);
      this.imagePath = this.data.image; // If editing, load existing image path
    }
  }

  initializeForm(): void {
    this.tourPackageForm = this.fb.group({
      id:[0],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      price: [0, [Validators.required, Validators.min(0)]],
      duration: ['', [Validators.required]],
      persons: [1, [Validators.required, Validators.min(1)]],
      destinationId: [null, [Validators.required]],
      image: [''] // Holds the relative image path
    });
  }
  fetchDestinations(): void {
    this.packageService.getDestinations()
      .subscribe((data) => {
        this.destinations = data;
      });
  }
   // Receive uploaded file name & path
 onFileUploaded(event: { fileName: string, filePath: string }) {
  this.imagePath = event.filePath;
  // Save file path in the form
  this.tourPackageForm.patchValue({ image: this.imagePath });
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