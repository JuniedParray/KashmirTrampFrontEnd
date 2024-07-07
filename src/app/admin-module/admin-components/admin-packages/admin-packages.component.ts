import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminTourPackage } from '../../adminModels/adminTourPackageModel';
import { AdminTourPackageService } from '../../adminServices/admin-tour-package.service';
import { AdminDialogService } from '../../adminServices/admin-dialog-service';
import { AdminAddEditPackageComponent } from '../admin-add-edit-package/admin-add-edit-package.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-packages',
  templateUrl: './admin-packages.component.html',
  styleUrls: ['./admin-packages.component.scss']
})

export class AdminPackagesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'price','Action'];
  dataSource!: MatTableDataSource<AdminTourPackage>;
  
  constructor(private tourPackageService: AdminTourPackageService,public dialog: MatDialog) { }
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.loadTourPackages();
  }

  loadTourPackages(): void {
    this.tourPackageService.getTourPackages().subscribe(data => {
      this.dataSource = new MatTableDataSource<AdminTourPackage>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  openDialog(packageData?: AdminTourPackage): void {
    const dialogRef = this.dialog.open(AdminAddEditPackageComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: packageData ? packageData : null
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Tour package data:', result);
        // Handle saving logic here (e.g., API call)
      }
    });
  }

  deleteTourPackage(tourPackage: AdminTourPackage): void {
    // Implement delete logic
  }
  addTourPackage() {
    throw new Error('Method not implemented.');
    }
applyFilter(arg0: any) {
  throw new Error('Method not implemented.');
  }
}