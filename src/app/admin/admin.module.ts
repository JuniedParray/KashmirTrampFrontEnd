import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourpackageComponent } from './components/tourpackage/tourpackage.component';
import { AddressComponent } from './components/address/address.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';



@NgModule({
  declarations: [
    TourpackageComponent,
    AddressComponent,
    DestinationComponent,
    ActivitiesComponent,
    TeamsComponent,
    SliderComponent,
    AdminComponent,
    AdminHomeComponent,
    
    
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    
  ],
  
})

export class AdminModule {}
