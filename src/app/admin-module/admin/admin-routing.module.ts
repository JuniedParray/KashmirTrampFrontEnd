import { BookingEnqueriesComponent } from './../admin-components/booking-enqueries/booking-enqueries.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin-components/dashboard/dashboard.component';
import { AdminGalleryComponent } from '../admin-components/admin-gallery/admin-gallery.component';
import { AdminDestinationsComponent } from '../admin-components/admin-destinations/admin-destinations.component';
import { AdminPackagesComponent } from '../admin-components/admin-packages/admin-packages.component';
import { AdminAdventuresComponent } from '../admin-components/admin-adventures/admin-adventures.component';
import { AdminContactInfoComponent } from '../admin-components/admin-contact-info/admin-contact-info.component';
import { AdminDayHikesComponent } from '../admin-components/admin-day-hikes/admin-day-hikes.component';
import { AdminHomeComponent } from '../admin-components/admin-home/admin-home.component';
import { AdminAboutComponent } from '../admin-components/admin-about/admin-about.component';
import { AdminSliderComponentComponent } from '../admin-components/admin-slider-component/admin-slider-component.component';
import { TeamsComponentComponent } from '../admin-components/teams-component/teams-component.component';
import { LoginComponent } from '../admin-components/login/login.component';
import { BookingComponent } from '../admin-components/booking/booking.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path:'',component : BookingEnqueriesComponent
      },
      {
        path: 'bookings', component: BookingComponent
      },
      {
        path:'sliders', component : AdminSliderComponentComponent
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
        path: 'teams', component: TeamsComponentComponent
      },
      {
        path:'contactInfo' , component :AdminAboutComponent
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
