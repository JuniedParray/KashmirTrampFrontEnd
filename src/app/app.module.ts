import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from '@coreui/angular';
import { ServiceProvidedComponent } from './components/service-provided/service-provided.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { PackageInfoComponent } from './components/packages/package-info/package-info.component';
import { AboutInfoComponent } from './components/about/about-info/about-info.component';
import { DayHikesComponent } from './components/day-hikes/day-hikes.component';
import { DayhikesInfoComponent } from './components/day-hikes/dayhikes-info/dayhikes-info.component';
import { DayHikeDetailsComponent } from './components/day-hikes/day-hike-details/day-hike-details.component';
import { PackageDetailComponent } from './components/packages/package-detail/package-detail.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { DefaultComponent } from './default/default.component';
import { AdminDestinationsComponent } from './admin-module/admin-components/admin-destinations/admin-destinations.component';
import { AdminAboutComponent } from './admin-module/admin-components/admin-about/admin-about.component';
import { AdminGalleryComponent } from './admin-module/admin-components/admin-gallery/admin-gallery.component';
import { AdminDayHikesComponent } from './admin-module/admin-components/admin-day-hikes/admin-day-hikes.component';
import { AdminContactInfoComponent } from './admin-module/admin-components/admin-contact-info/admin-contact-info.component';
import { AdminAdventuresComponent } from './admin-module/admin-components/admin-adventures/admin-adventures.component';
import { AdminPackagesComponent } from './admin-module/admin-components/admin-packages/admin-packages.component';
import { AdminAddPackageComponent } from './admin-module/admin-components/admin-add-package/admin-add-package.component';
import { AdminHomeComponent } from './admin-module/admin-components/admin-home/admin-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultComponent,
    AboutComponent,
    PackagesComponent,
    ContactComponent,
    TeamsComponent,
    ServiceProvidedComponent,
    DestinationsComponent,
    ContactInfoComponent,
    PackageInfoComponent,
    AboutInfoComponent,
    DayHikesComponent,
    DayhikesInfoComponent,
    DayHikeDetailsComponent,
    PackageDetailComponent,
    AdventureComponent,
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
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
