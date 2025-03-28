import { Destination } from './../../../models/destination';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdventureActivity } from '../../adminModels/adventureActivity';
import { AdminActivityService } from '../../adminServices/admin-activity.service';
import { AdminAddEditActivityComponent } from '../admin-add-edit-activity/admin-add-edit-activity.component';

@Component({
  selector: 'app-admin-adventures',
  templateUrl: './admin-adventures.component.html',
  styleUrls: ['./admin-adventures.component.scss']
})
export class AdminAdventuresComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'destination', 'Action'];
  dataSource!: MatTableDataSource<AdventureActivity>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service: AdminActivityService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadActivities();
  }

  // Load activities and initialize the table data
  loadActivities(): void {
    this.isLoading = true;
    this.service.fetchActivities().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<AdventureActivity>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load activities. Please try again later.', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  // Open dialog for adding or editing activity
  openDialog(activity?: AdventureActivity): void {
    const dialogRef = this.dialog.open(AdminAddEditActivityComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: activity || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.destination = "";
        if (activity) {
          this.updateActivity(result);
        } else {
          this.addActivity(result);
        }
      }
    });
  }

  // Add a new activity
  addActivity(activity: AdventureActivity): void {
    
    this.service.addActivity(activity).subscribe({
      next: () => {
        this.snackBar.open('Activity added successfully!', 'Close', { duration: 3000 });
        this.loadActivities();
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to add activity. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  // Update an existing activity
  updateActivity(activity: AdventureActivity): void {
    this.service.updateActivity(activity).subscribe({
      next: () => {
        this.snackBar.open('Activity updated successfully!', 'Close', { duration: 3000 });
        this.loadActivities();
      },
      error: () => {
        this.snackBar.open('Failed to update activity. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  // Delete activity
  deleteActivity(activity: AdventureActivity): void {
    if (confirm(`Are you sure you want to delete the activity "${activity.name}"?`)) {
      this.service.deleteActivity(activity.id).subscribe({
        next: () => {
          this.snackBar.open('Activity deleted successfully!', 'Close', { duration: 3000 });
          this.loadActivities();
        },
        error: () => {
          this.snackBar.open('Failed to delete activity. Please try again.', 'Close', { duration: 3000 });
        }
      });
    }
  }

  // Apply filter to the table
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
