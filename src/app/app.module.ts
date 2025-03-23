import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { LoginComponent } from './admin-module/admin-components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './components/booking/booking.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HelpComponent } from './components/help/help.component';



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
    LoginComponent,
    BookingComponent,
    TestimonialsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    PaymentComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
