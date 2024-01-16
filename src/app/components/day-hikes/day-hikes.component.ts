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

  constructor(private router: Router, private dayHikeDataService: DayHikeDataService) {
    this.dayHikes = dayHikeDataService.getDayHikes();
  }
}
