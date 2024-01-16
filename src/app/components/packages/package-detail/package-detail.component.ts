import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageInfo } from 'src/app/models/package-info';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent {
  package: PackageInfo|undefined;

  constructor(private route: ActivatedRoute, private packageService: PackageService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const packageIdString = params.get('id');
    
      if (packageIdString !== null) {
        const packageId = +packageIdString;
        this.package = this.packageService.getPackageById(packageId);
      } });
  }
}
