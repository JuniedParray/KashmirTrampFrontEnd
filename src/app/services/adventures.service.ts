import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AdventuresService {
  private activities :any[] = [];
  selectedDayHike: any | undefined;

  getAllActivities(): any[] {
    return this.activities;
  }

  getActivityById(id: number): any | undefined {
    return this.activities.find(a => a.id === id);
  }
  constructor(private dataService: DataService) { }
  // Fetch all adventures from the API
     fetchAdventureActivities(): Observable<any[]> {
      return this.dataService.get<any[]>('api/home/GetAdventureActivities').pipe(
        tap((activities: any[]) => (this.activities = activities)) // Cache the packages locally
      );
    }
}
