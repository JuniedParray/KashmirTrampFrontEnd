import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminTourPackage } from '../../adminModels/adminTourPackageModel';
import { AdminTourPackageService } from '../../adminServices/admin-tour-package.service';

@Component({
  selector: 'app-admin-packages',
  templateUrl: './admin-packages.component.html',
  styleUrls: ['./admin-packages.component.scss']
})

export class AdminPackagesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource!: MatTableDataSource<AdminTourPackage>;
  
  constructor(private tourPackageService: AdminTourPackageService) { }
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.loadTourPackages();
  }

  loadTourPackages(): void {
    this.tourPackageService.getTourPackages().subscribe(data => {
      this.dataSource = new MatTableDataSource<AdminTourPackage>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editTourPackage(tourPackage: AdminTourPackage): void {
    // Implement edit logic
  }

  deleteTourPackage(tourPackage: AdminTourPackage): void {
    // Implement delete logic
  }
 
applyFilter(arg0: any) {
  throw new Error('Method not implemented.');
  }
}