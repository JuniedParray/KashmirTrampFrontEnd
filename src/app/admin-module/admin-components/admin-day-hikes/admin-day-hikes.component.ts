import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDayHike } from '../../adminModels/adminDayHike';
import { AdminDayHikesService } from '../../adminServices/admin-dayHikes.service';
import { AdminAddEditDayHikeComponentComponent } from '../admin-add-edit-day-hik-component/admin-add-edit-day-hik-component.component';

@Component({
  selector: 'app-admin-day-hikes',
  templateUrl: './admin-day-hikes.component.html',
  styleUrls: ['./admin-day-hikes.component.scss']
})
export class AdminDayHikesComponent {
  displayedColumns: string[] = ['name', 'description', 'destination','distance', 'Action'];
  dataSource!: MatTableDataSource<AdminDayHike>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service: AdminDayHikesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadData();
  }

  // Load activities and initialize the table data
  loadData(): void {
    this.isLoading = true;
    this.service.getDayHikes().subscribe({
      next: (data: AdminDayHike[] | undefined) => {
        this.dataSource = new MatTableDataSource<AdminDayHike>(data);
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

  openDialog(dayHike?: AdminDayHike): void {
    const dialogRef = this.dialog.open(AdminAddEditDayHikeComponentComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: dayHike || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (dayHike) {
          this.updateData(result);
        } else {
          this.addData(result);
        }
      }
    });
  }

  addData(dayHike: AdminDayHike): void {
    this.service.add(dayHike).subscribe({
      next: () => {
        this.snackBar.open('DayHike added successfully!', 'Close', { duration: 3000 });
        this.loadData();
      },
      error: (error: any) => {
        console.log(error);
        this.snackBar.open('Failed to add dayHike. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  updateData(dayHike: AdminDayHike): void {
    this.service.update(dayHike).subscribe({
      next: () => {
        this.snackBar.open('DayHike updated successfully!', 'Close', { duration: 3000 });
        this.loadData();
      },
      error: () => {
        this.snackBar.open('Failed to update dayHike. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  deleteDayHike(dayHike: AdminDayHike): void {
    if (confirm(`Are you sure you want to delete the dayHike "${dayHike.name}"?`)) {
      this.service.delete(dayHike.id).subscribe({
        next: () => {
          this.snackBar.open('DayHike deleted successfully!', 'Close', { duration: 3000 });
          this.loadData();
        },
        error: () => {
          this.snackBar.open('Failed to delete dayHike. Please try again.', 'Close', { duration: 3000 });
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