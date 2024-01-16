import { Component } from '@angular/core';
import { ContactDetails } from './models/contact-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KashmirTrampAdventure';
  contactInfo : ContactDetails = {
    address :'Laripora Pahalgam, Anantnag,J&K,192126',
    mobile: '+917889816783',
    email: 'info@kashmirtrampadventure.com',
    fbLink: '',
    instaLink: '',
    youTubeLink: ''
  }
  gallery :any[] = ['assets/img/package-1.jpg','assets/img/package-2.jpg',
  'assets/img/package-3.jpg' ]
}
