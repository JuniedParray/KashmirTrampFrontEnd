import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdventuresService } from 'src/app/services/adventures.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent {
  activities : any[] | undefined

  constructor(private router: Router, private adventureService : AdventuresService) {
   
  }
  ngOnInit(): void {
    this.adventureService.fetchAdventureActivities().subscribe(
      (adventureActivities) => {
        this.activities = adventureActivities;
      },
      (error) => {
        console.error('Error fetching adventure Activities:', error);
      }
    );
  }
}
