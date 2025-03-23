import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { AdventureActivity } from '../adminModels/adventureActivity';

@Injectable({
  providedIn: 'root'
})

export class AdminActivityService {
  
  private activity: AdventureActivity[] = [];

  constructor(private dataService : DataService) { }
  
   // Fetch all activities from the API
     fetchActivities(): Observable<AdventureActivity[]> {
       return this.dataService.get<AdventureActivity[]>('api/admin/GetActivities');
    }

    getDestinations() {
      return this.dataService.get<any>(`api/admin/GetDestinations`);
    }
  // Method to get activity by ID
  getActivityById(id: Number) {
    return this.dataService.get<AdventureActivity>(`api/admin/GetActivityById/${id}`);
  }

  // Method to add a new activity
  addActivity(activity: AdventureActivity): Observable<void> {
    return this.dataService.post(`api/admin/CreateActivity`, activity);
  }

  // Method to update activity
  updateActivity(activity: AdventureActivity): Observable<void> {
    return this.dataService.post(`api/admin/UpdateAdventureActivity`, activity);
  }

  // Method to delete activity
  deleteActivity(id: number): Observable<void> {
    return this.dataService.post(`api/admin/DeleteAdventureActivity/${id}`,null);
  }
}
