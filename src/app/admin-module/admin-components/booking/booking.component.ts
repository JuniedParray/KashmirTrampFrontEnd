import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { BookingEnquiry } from '../../adminModels/admin-booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent  implements AfterViewInit {
  displayedColumns: string[] = ['name', 'emailAddress', 'dateTime', 'destination','specialRequest'];
  dataSource!: MatTableDataSource<BookingEnquiry>;
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
        this.dataSource = new MatTableDataSource<BookingEnquiry>(data);
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
  fetchEnqueries(): Observable<BookingEnquiry[]> {
    return this.dataService.get<BookingEnquiry[]>('api/admin/GetBookings');
  }

}

