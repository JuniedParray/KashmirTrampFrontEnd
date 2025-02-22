import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminDestinationsService } from '../../adminServices/admin-destinations.service';
import { AdminDestination } from '../../adminModels/adminDestination';
import { AdminAddEditDestinationComponent } from '../admin-add-edit-destination/admin-add-edit-destination.component';


@Component({
  selector: 'app-admin-destinations',
  templateUrl: './admin-destinations.component.html',
  styleUrls: ['./admin-destinations.component.scss']
})


export class AdminDestinationsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'price', 'Action'];
  dataSource!: MatTableDataSource<AdminDestination>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private destinationService: AdminDestinationsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadDestinations();
  }

  // Load Destinations and initialize the table data
  loadDestinations(): void {
    this.isLoading = true;
    this.destinationService.getDestinations().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<AdminDestination>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load destination. Please try again later.', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  // Open dialog for adding or editing a destination
  openDialog(destination?: AdminDestination): void {
    const dialogRef = this.dialog.open(AdminAddEditDestinationComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: destination || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (destination) {
          this.updateDestination(result);
        } else {
          this.addDestination(result);
        }
      }
    });
  }

  // Add a new destination
  addDestination(destination: AdminDestination): void {
    this.destinationService.addDestination(destination).subscribe({
      next: () => {
        debugger
        this.snackBar.open('Destination added successfully!', 'Close', { duration: 3000 });
        this.loadDestinations();
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to add destination. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  // Update an existing destination
  updateDestination(destination: AdminDestination): void {
    this.destinationService.updateDestination(destination).subscribe({
      next: () => {
        this.snackBar.open('Destination updated successfully!', 'Close', { duration: 3000 });
        this.loadDestinations();
      },
      error: () => {
        this.snackBar.open('Failed to update Destination. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  // Delete a tour Destination
  deleteDestination(destination: AdminDestination): void {
    if (confirm(`Are you sure you want to delete the destination "${destination.name}"?`)) {
      this.destinationService.deleteDestination(destination.id).subscribe({
        next: () => {
          this.snackBar.open('Destination deleted successfully!', 'Close', { duration: 3000 });
          this.loadDestinations();
        },
        error: () => {
          this.snackBar.open('Failed to delete destination. Please try again.', 'Close', { duration: 3000 });
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
