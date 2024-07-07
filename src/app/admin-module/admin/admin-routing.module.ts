import { BookingEnqueriesComponent } from './../admin-components/booking-enqueries/booking-enqueries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin-components/dashboard/dashboard.component';
import { AdminGalleryComponent } from '../admin-components/admin-gallery/admin-gallery.component';
import { AdminDestinationsComponent } from '../admin-components/admin-destinations/admin-destinations.component';
import { AdminPackagesComponent } from '../admin-components/admin-packages/admin-packages.component';
import { AdminAdventuresComponent } from '../admin-components/admin-adventures/admin-adventures.component';
import { AdminContactInfoComponent } from '../admin-components/admin-contact-info/admin-contact-info.component';
import { AdminDayHikesComponent } from '../admin-components/admin-day-hikes/admin-day-hikes.component';
import { AdminHomeComponent } from '../admin-components/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path:'',component : BookingEnqueriesComponent
      },
      {
        path: 'packages', component: AdminPackagesComponent
      },
      {
        path: 'adventures', component: AdminAdventuresComponent
      },
      {
        path: 'destinations', component: AdminDestinationsComponent
      },
      {
        path: 'gallery', component: AdminGalleryComponent
      },
      {
        path:'contactInfo' , component :AdminContactInfoComponent
      },
      {
        path:'dayHikes' , component :AdminDayHikesComponent
      }
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
