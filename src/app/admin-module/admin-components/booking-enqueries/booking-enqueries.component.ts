import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminEnquiry } from '../../adminModels/adminEnqueries';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-enqueries',
  templateUrl: './booking-enqueries.component.html',
  styleUrls: ['./booking-enqueries.component.scss']
})
export class BookingEnqueriesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'date', 'enquiryFrom', 'message'];
  dataSource!: MatTableDataSource<AdminEnquiry>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadEnqueries();
  }

  // Load enqueries and initialize the table data
  loadEnqueries(): void{
 this.isLoading = true;
 this.fetchEnqueries().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<AdminEnquiry>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load enqueries. Please try again later.', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });

       
  }

  // Fetch all packages from the API
  fetchEnqueries(): Observable<AdminEnquiry[]> {
    return this.dataService.get<AdminEnquiry[]>('api/admin/GetEnqueries');
  }

}
