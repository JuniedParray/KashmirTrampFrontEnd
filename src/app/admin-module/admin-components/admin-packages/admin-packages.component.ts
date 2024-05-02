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
  tourPackages: AdminTourPackage[] | undefined;
  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];

  constructor(private tourPackageService: AdminTourPackageService) { }

  ngOnInit(): void {
    this.getTourPackages();
  }

  getTourPackages(): void {
    this.tourPackageService.getTourPackages()
      .subscribe(tourPackages => this.tourPackages = tourPackages);
  }

  editTourPackage(tourPackage: AdminTourPackage): void {
    // Implement edit logic
  }

  deleteTourPackage(tourPackage: AdminTourPackage): void {
    // Implement delete logic
  }
}