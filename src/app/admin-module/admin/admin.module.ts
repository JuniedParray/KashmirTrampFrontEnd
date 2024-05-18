import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from '../admin-components/dashboard/dashboard.component';
import { AddPackageComponent } from '../../add-package/add-package.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminDestinationsComponent } from '../admin-components/admin-destinations/admin-destinations.component';
import { AdminAboutComponent } from '../admin-components/admin-about/admin-about.component';
import { AdminAddPackageComponent } from '../admin-components/admin-add-package/admin-add-package.component';
import { AdminAdventuresComponent } from '../admin-components/admin-adventures/admin-adventures.component';
import { AdminContactInfoComponent } from '../admin-components/admin-contact-info/admin-contact-info.component';
import { AdminDayHikesComponent } from '../admin-components/admin-day-hikes/admin-day-hikes.component';
import { AdminGalleryComponent } from '../admin-components/admin-gallery/admin-gallery.component';
import { AdminHomeComponent } from '../admin-components/admin-home/admin-home.component';
import { AdminPackagesComponent } from '../admin-components/admin-packages/admin-packages.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AddPackageComponent,
    AdminDestinationsComponent,
    AdminAboutComponent,
    AdminGalleryComponent,
    AdminDayHikesComponent,
    AdminContactInfoComponent,
    AdminAdventuresComponent,
    AdminPackagesComponent,
    AdminAddPackageComponent,
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButton,
    MatFormFieldModule,
    FormsModule
  
  ]
})
export class AdminModule { }
