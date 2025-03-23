import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DayHike } from 'src/app/models/dayHike';
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
  slides: { src: string }[] = [];
  dayHikes :DayHike[] | undefined
  activities : any[] = []

  constructor(private dataService: DataService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.get<{ destinations: Destination[], team: Teams[], packages: PackageInfo[], slider: any[] ,dayHikes:DayHike[],activities:any[]}>('api/home/getHomePageDetails')
      .subscribe(
        (response) => {
          this.destinations = response.destinations || [];
          this.teamsInfo = response.team || [];
          this.packageInfo = response.packages || [];
          this.activities = response.activities || [];
          this.dayHikes = response.dayHikes || [];

          // // Assign API response to `this.slides` using index-based assignments
          response.slider.forEach((slide, index) => {
             this.slides.push({ src: slide.imagePath });
           
           });
           
          
        },
        (error) => {
          console.error('Error fetching home page details', error);
        }
      );
  }
}
