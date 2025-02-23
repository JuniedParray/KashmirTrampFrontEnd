import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamMember } from '../../adminModels/admin-teams';
import { AdminTeamMembersService } from '../../adminServices/admin-teams.service';


@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.scss']
})

export class AddEditTeamComponent implements OnInit {
  form!: FormGroup  ;
  selectedFile: File | null = null;
  imagePath: string | null = null; // To hold the relative path of the image

  constructor(
    public dialogRef: MatDialogRef<AddEditTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TeamMember,
    private fb: FormBuilder,private service : AdminTeamMembersService
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
      role: ['', [Validators.maxLength(500)]],
      fbLink: ['', [Validators.maxLength(500)]],
      instaLink: ['', [Validators.maxLength(500)]],
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

