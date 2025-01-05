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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dayHikeService.getDayHikeById(id).subscribe(
      (dayHike) => {
        this.dayHike = dayHike;
      },
      (error) => {
        console.error('Error fetching day hike by id:', error);
      }
    );
  }
}
