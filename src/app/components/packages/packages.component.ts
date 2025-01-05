import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageInfo } from 'src/app/models/package-info';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  packageInfo :PackageInfo[] = [];

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.packageService.fetchPackages().subscribe(
      (packages) => {
        this.packageInfo = packages;
      },
      (error) => {
        console.error('Error fetching packages:', error);
      }
    );
  }
}
