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
  title = 'ValleyVoyages';
  contactInfo : ContactDetails = {address: '', email: '', mobile: '',fbLink: '',instaLink: '',youTubeLink: ''}; 
  gallery: any[] = [
    'assets/img/package-1.jpeg',
    'assets/img/package-2.jpeg',
    'assets/img/package-3.jpeg'
  ]
  currentYear = new Date().getFullYear();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
    this.dataService.get<{aboutDetail: ContactDetails, gallery: any[]}>('api/home/getLayoutDetails').subscribe(
      (response) => {
        this.data = response;
        this.contactInfo = response.aboutDetail;
        if (response.gallery.length > 0) {
          this.gallery = response.gallery;
        }
        
      },
      (error) => {
        console.error('Error fetching layout details', error)
      }

    );
  }
  
}
