import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminTourPackage } from '../../adminModels/adminTourPackageModel';
import { AdminTourPackageService } from '../../adminServices/admin-tour-package.service';
import { AdminAddEditPackageComponent } from '../admin-add-edit-package/admin-add-edit-package.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-packages',
  templateUrl: './admin-packages.component.html',
  styleUrls: ['./admin-packages.component.scss']
})
export class AdminPackagesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'Action'];
  dataSource!: MatTableDataSource<AdminTourPackage>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private tourPackageService: AdminTourPackageService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadTourPackages();
  }

  // Load packages and initialize the table data
  loadTourPackages(): void {
    this.isLoading = true;
    this.tourPackageService.fetchPackages().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<AdminTourPackage>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load packages. Please try again later.', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  // Open dialog for adding or editing a package
  openDialog(packageData?: AdminTourPackage): void {
    const dialogRef = this.dialog.open(AdminAddEditPackageComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: packageData || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (packageData) {
          this.updateTourPackage(result);
        } else {
          this.addTourPackage(result);
        }
      }
    });
  }

  // Add a new tour package
  addTourPackage(tourPackage: AdminTourPackage): void {
    this.tourPackageService.addTourPackage(tourPackage).subscribe({
      next: () => {
        this.snackBar.open('Package added successfully!', 'Close', { duration: 3000 });
        this.loadTourPackages();
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to add package. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  // Update an existing tour package
  updateTourPackage(tourPackage: AdminTourPackage): void {
    this.tourPackageService.updateTourPackage(tourPackage).subscribe({
      next: () => {
        this.snackBar.open('Package updated successfully!', 'Close', { duration: 3000 });
        this.loadTourPackages();
      },
      error: () => {
        this.snackBar.open('Failed to update package. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  // Delete a tour package
  deleteTourPackage(tourPackage: AdminTourPackage): void {
    if (confirm(`Are you sure you want to delete the package "${tourPackage.name}"?`)) {
      this.tourPackageService.deleteTourPackage(tourPackage.id).subscribe({
        next: () => {
          this.snackBar.open('Package deleted successfully!', 'Close', { duration: 3000 });
          this.loadTourPackages();
        },
        error: () => {
          this.snackBar.open('Failed to delete package. Please try again.', 'Close', { duration: 3000 });
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
