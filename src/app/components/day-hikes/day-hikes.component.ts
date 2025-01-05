import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DayHike } from 'src/app/models/dayHike';
import { DayHikeDataService } from 'src/app/services/day-hike-data.service';

@Component({
  selector: 'app-day-hikes',
  templateUrl: './day-hikes.component.html',
  styleUrls: ['./day-hikes.component.scss']
})
export class DayHikesComponent {
  dayHikes :DayHike[] | undefined

  constructor(private router: Router, private dayHikeService: DayHikeDataService) {
   
  }
  ngOnInit(): void {
    this.dayHikeService.fetchDayHikes().subscribe(
      (dayHike) => {
        this.dayHikes = dayHike;
      },
      (error) => {
        console.error('Error fetching day hikes:', error);
      }
    );
  }
}
