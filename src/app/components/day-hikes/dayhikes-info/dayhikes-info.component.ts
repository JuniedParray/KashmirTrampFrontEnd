import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DayHike } from 'src/app/models/dayHike';
import { DayHikeDataService } from 'src/app/services/day-hike-data.service';

@Component({
  selector: 'app-dayhikes-info',
  templateUrl: './dayhikes-info.component.html',
  styleUrls: ['./dayhikes-info.component.scss']
})
export class DayhikesInfoComponent {
  @Input() dayHike: DayHike | undefined;

  constructor(private router: Router, private dayHikeService: DayHikeDataService) {
   
  }

  showDetails(id: number| undefined): void {
    this.router.navigate(['/dayHikeDetail', id]);
  }
}
