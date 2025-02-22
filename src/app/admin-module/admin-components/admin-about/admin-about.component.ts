import { Component } from '@angular/core';
import { ContactInfo } from '../../adminModels/adminAbout';
import { AdminAboutService } from '../../adminServices/admin-about.service';
import { MatDialog } from '@angular/material/dialog';
import { AdventureActivity } from '../../adminModels/adventureActivity';
import { AdminAddEditActivityComponent } from '../admin-add-edit-activity/admin-add-edit-activity.component';
import { AdminContactInfoComponent } from '../admin-contact-info/admin-contact-info.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent {

  contactData?: ContactInfo
  constructor(
    private service: AdminAboutService,
    public dialog: MatDialog,
 private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadData();
  }

  
  loadData(): void {
    
    this.service.getAboutDetails().subscribe({
      next: (data) => {
        this.contactData = data;
      },
      error: () => {
        console.log('error occured');
      }
    });
  }

  // Open dialog for adding or editing data
  openDialog(data?: ContactInfo): void {
    const dialogRef = this.dialog.open(AdminContactInfoComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.addData(result);
      }
    });
  }

  // Add Data
  addData(data: ContactInfo): void {
    
    this.service.addUpdate(data).subscribe({
      next: () => {
        this.snackBar.open('Data added successfully!', 'Close', { duration: 3000 });
        this.loadData();
      },
      error: (error) => {
        console.log(error);
        
        this.snackBar.open('Failed to add data. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }


}

