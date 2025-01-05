import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageInfo } from 'src/app/models/package-info';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {
  package: PackageInfo|undefined;

  constructor(private route: ActivatedRoute, private packageService: PackageService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.packageService.getPackageById(id).subscribe(
      (packageInfo) => {
        this.package = packageInfo;
      },
      (error) => {
        console.error('Error fetching package:', error);
      }
    );
  }
}
