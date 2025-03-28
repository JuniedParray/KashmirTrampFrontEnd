import { AdminAddEditActivityComponent } from './../admin-components/admin-add-edit-activity/admin-add-edit-activity.component';
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
import { AdminAdventuresComponent } from '../admin-components/admin-adventures/admin-adventures.component';
import { AdminContactInfoComponent } from '../admin-components/admin-contact-info/admin-contact-info.component';
import { AdminDayHikesComponent } from '../admin-components/admin-day-hikes/admin-day-hikes.component';
import { AdminGalleryComponent } from '../admin-components/admin-gallery/admin-gallery.component';
import { AdminHomeComponent } from '../admin-components/admin-home/admin-home.component';
import { AdminPackagesComponent } from '../admin-components/admin-packages/admin-packages.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAddEditPackageComponent } from '../admin-components/admin-add-edit-package/admin-add-edit-package.component';
import { MatSelectModule } from '@angular/material/select';
import { BookingEnqueriesComponent } from '../admin-components/booking-enqueries/booking-enqueries.component';
import { AdminAddEditDestinationComponent } from '../admin-components/admin-add-edit-destination/admin-add-edit-destination.component';
import { FileUploaderComponent } from '../admin-components/file-uploader/file-uploader.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddEditDayHikeComponentComponent } from '../admin-components/admin-add-edit-day-hik-component/admin-add-edit-day-hik-component.component';
import { AdminSliderComponentComponent } from '../admin-components/admin-slider-component/admin-slider-component.component';
import { AdminAddEditSliderComponent } from '../admin-components/admin-add-edit-clider/admin-add-edit-clider.component';
import { AddEditTeamComponent } from '../admin-components/add-edit-team/add-edit-team.component';
import { AdminAddEditGalleryComponent } from '../admin-components/admin-add-edit-gallery/admin-add-edit-gallery.component';
import { TeamsComponentComponent } from '../admin-components/teams-component/teams-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { BookingComponent } from '../admin-components/booking/booking.component';


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
    AdminHomeComponent,
    AdminAddEditPackageComponent,
    BookingEnqueriesComponent,
    AdminAddEditActivityComponent,
    AdminAddEditDestinationComponent,
    FileUploaderComponent,
    AdminAddEditDayHikeComponentComponent,
    AdminSliderComponentComponent,
    AdminAddEditSliderComponent,
    AddEditTeamComponent,
    AdminAddEditGalleryComponent,
    TeamsComponentComponent,
    BookingComponent
    
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
    MatButtonModule ,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule
  
  ]
})
export class AdminModule { }
