import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../models/contact-details';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit{
  data: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
    this.dataService.get('api/home/getLayoutDetails').subscribe(
      (response) => {
        debugger
        this.data = response;
      },
      (error) => {
        console.error('Error fetching layout details', error)
      }

    );
  }
  title = 'KashmirTrampAdventure';
  contactInfo : ContactDetails = {
    address :'Laripora Pahalgam, Anantnag,J&K,192126',
    mobile: '+917889816783',
    email: 'info@kashmirtrampadventure.com',
    fbLink: '',
    instaLink: '',
    youTubeLink: ''
  }
  gallery: any[] = [
    'assets/img/package-1.jpg',
    'assets/img/package-2.jpg',
    'assets/img/package-3.jpg'
  ]
}
