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
import { AppComponent } from './app.component';
import { AdminModule } from './admin-module/admin/admin.module';
import { DefaultComponent } from './default/default.component';
import { AuthGuard } from './admin-module/admin/admin-auth.guard';
import { LoginComponent } from './admin-module/admin-components/login/login.component';
import { HelpComponent } from './components/help/help.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
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
        path:'termsConditions',component:TermsConditionsComponent
      },
      {
        path:'privacyPolicy',component:PrivacyPolicyComponent
      },
      {
        path:'help',component:HelpComponent
      }
    ]
  },
  {
    path: 'admin', loadChildren: () => AdminModule , canActivate: [AuthGuard] 
  },
  {
    path:'login',component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
