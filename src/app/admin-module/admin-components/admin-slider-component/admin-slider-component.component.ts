
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminSliderService } from '../../adminServices/admin-slider.service';
import { SliderInfo } from '../../adminModels/adminSlider';
import { AdminAddEditSliderComponent } from '../admin-add-edit-clider/admin-add-edit-clider.component';
@Component({
  selector: 'app-admin-slider-component',
  templateUrl: './admin-slider-component.component.html',
  styleUrl: './admin-slider-component.component.scss'
})


export class AdminSliderComponentComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'Action'];
  dataSource!: MatTableDataSource<SliderInfo>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service: AdminSliderService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadSliders();
  }

  // Load sliders and initialize the table data
  loadSliders(): void {
    this.isLoading = true;
    this.service.getSliders().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<SliderInfo>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load sliders. Please try again later.', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  openDialog(data?: SliderInfo): void {
    const dialogRef = this.dialog.open(AdminAddEditSliderComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (data) {
          this.update(result);
        } else {
          this.add(result);
        }
      }
    });
  }


  add(slider: SliderInfo): void {
    this.service.add(slider).subscribe({
      next: () => {
        this.snackBar.open('Slider added successfully!', 'Close', { duration: 3000 });
        this.loadSliders();
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to add slider. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  update(slider: SliderInfo): void {
    this.service.update(slider).subscribe({
      next: () => {
        this.snackBar.open('Slider updated successfully!', 'Close', { duration: 3000 });
        this.loadSliders();
      },
      error: () => {
        this.snackBar.open('Failed to update slider. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  delete(slider: SliderInfo): void {
    if (confirm(`Are you sure you want to delete slider?`)) {
      this.service.delete(slider.id).subscribe({
        next: () => {
          this.snackBar.open('Slider deleted successfully!', 'Close', { duration: 3000 });
          this.loadSliders();
        },
        error: () => {
          this.snackBar.open('Failed to delete slider. Please try again.', 'Close', { duration: 3000 });
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

