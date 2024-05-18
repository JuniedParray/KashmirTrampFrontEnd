import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminTourPackage } from '../../adminModels/adminTourPackageModel';
import { AdminTourPackageService } from '../../adminServices/admin-tour-package.service';
import { AdminDialogService } from '../../adminServices/admin-dialog-service';
import { AdminAddEditPackageComponent } from '../admin-add-edit-package/admin-add-edit-package.component';

@Component({
  selector: 'app-admin-packages',
  templateUrl: './admin-packages.component.html',
  styleUrls: ['./admin-packages.component.scss']
})

export class AdminPackagesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'price','Action'];
  dataSource!: MatTableDataSource<AdminTourPackage>;
  
  constructor(private tourPackageService: AdminTourPackageService,private dialogService: AdminDialogService) { }
  


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
  openTourPackageDialog(tourPackage?: any): void {
    const dialogRef = this.dialogService.openDialog(AdminAddEditPackageComponent, { tourPackage }, { width: '400px',height:'400px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Add logic to handle the result here
    });
  }
  editTourPackage(tourPackage: AdminTourPackage): void {
    // Implement edit logic
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