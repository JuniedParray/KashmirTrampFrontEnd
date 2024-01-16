import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PackageInfo } from 'src/app/models/package-info';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  packageInfo :PackageInfo[];

  constructor(private router: Router, private packageService: PackageService) {
    this.packageInfo = packageService.getPackages();
  }
}
