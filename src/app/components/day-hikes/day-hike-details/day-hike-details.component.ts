import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DayHike } from 'src/app/models/dayHike';
import { DayHikeDataService } from 'src/app/services/day-hike-data.service';

@Component({
  selector: 'app-day-hike-details',
  templateUrl: './day-hike-details.component.html',
  styleUrls: ['./day-hike-details.component.scss']
})
export class DayHikeDetailsComponent implements OnInit{
  
  dayHike: DayHike|undefined;

  constructor(private route: ActivatedRoute, private dayHikeService: DayHikeDataService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const dayHikeIdString = params.get('id');
    
      if (dayHikeIdString !== null) {
        const dayHikeId = +dayHikeIdString;
        this.dayHike = this.dayHikeService.selectedDayHike || this.dayHikeService.getDayHikeById(dayHikeId);
      } });
  }
}
