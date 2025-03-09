import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ContactDetails } from 'src/app/models/contact-details';
import { Destination } from 'src/app/models/destination';
import { PackageInfo } from 'src/app/models/package-info';
import { Teams } from 'src/app/models/teams';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destinations: Destination[] = [];
  teamsInfo: Teams[] = [];
  packageInfo: PackageInfo[] = [];
  slides: any[] = [];

  constructor(private dataService: DataService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/destination-1.jpg',
    };
    this.slides[1] = {
      src: './assets/img/destination-2.jpg',
    }
    this.slides[2] = {
      src: './assets/img/destination-3.jpg',
    }
    this.loadData();
  }

  loadData(): void {
    this.dataService.get<{ destinations: Destination[], team: Teams[], packages: PackageInfo[], slider: any[] }>('api/home/getHomePageDetails')
      .subscribe(
        (response) => {
          this.destinations = response.destinations || [];
          this.teamsInfo = response.team || [];
          this.packageInfo = response.packages || [];
         debugger
          // Initialize slides array with empty objects to avoid "undefined" issues
          // this.slides = new Array(response.slider.length).fill({id: -1, src: '', title: '', subtitle: ''});
          // // Assign API response to `this.slides` using index-based assignments
          // response.slider.forEach((slide, index) => {
          //   this.slides[index] = { src: slide.imagePath };
          // });
           // 🚀 **Force Angular to detect changes**
           this.slides = [...this.slides]; // Reassign the array reference
           this.cdr.detectChanges(); // Manually trigger change detection
          debugger
        },
        (error) => {
          console.error('Error fetching home page details', error);
        }
      );
  }
}
