import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DestinationComponent } from './components/destination/destination.component';
import { TourpackageComponent } from './components/tourpackage/tourpackage.component';
import { AddressComponent } from './components/address/address.component';
import { SliderComponent } from './components/slider/slider.component';
import { TeamsComponent } from './components/teams/teams.component';
import { HomeComponent } from '../components/home/home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

 // Adjust the path as needed

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, // 
    children: [
      { path: '', component: AdminHomeComponent }, // AdminComponent will be loaded within AdminLayoutComponent
      { path: 'destinations', component: DestinationComponent }, // Replace with your actual admin details component
      { path: 'tourPackages', component: TourpackageComponent }, // Replace with your actual admin create component
      { path: 'address', component: AddressComponent }, 
      { path: 'slider', component: SliderComponent }, 
      { path: 'teams', component: TeamsComponent }, 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}