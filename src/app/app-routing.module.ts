import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { ServiceProvidedComponent } from './components/service-provided/service-provided.component';
import { DayHikesComponent } from './components/day-hikes/day-hikes.component';
import { DayHikeDetailsComponent } from './components/day-hikes/day-hike-details/day-hike-details.component';
import { PackageDetailComponent } from './components/packages/package-detail/package-detail.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'services', component: ServiceProvidedComponent
  },
  {
    path: 'packages', component: PackagesComponent
  },
  {
    path: 'dayHikes', component: DayHikesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'adventure', component: AdventureComponent
  },
  {
    path: 'dayHikeDetail/:id', component: DayHikeDetailsComponent
  },
  {
    path:'packageDetail/:id',component:PackageDetailComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
