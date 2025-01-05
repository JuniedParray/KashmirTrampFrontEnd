import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PackageInfo } from 'src/app/models/package-info';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package-info',
  templateUrl: './package-info.component.html',
  styleUrls: ['./package-info.component.scss']
})
export class PackageInfoComponent {
@Input() packageInfo :PackageInfo | undefined

constructor(private router: Router, private packageService: PackageService) {
   
}
showPackageDetail(id:number| undefined){
  this.router.navigate(['/packageDetail', id]);
  }
  
}
