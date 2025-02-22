import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { AdminDestination } from '../adminModels/adminDestination';

@Injectable({
  providedIn: 'root'
})

export class AdminDestinationsService {


  constructor(private dataService : DataService) { }
  
// get destinations
    getDestinations() {
      return this.dataService.get<any>(`api/admin/GetDestinations`);
    }
  // Method to get a destination by ID
  getDestinationById(id: Number) {
    return this.dataService.get<any>(`api/admin/GetDestinationById/${id}`);
  }

  // Method to add a new destination
  addDestination(tourPackage: AdminDestination): Observable<void> {
    return this.dataService.post(`api/admin/CreateDestination`, tourPackage);
  }

  // Method to update a destination
  updateDestination(tourPackage: AdminDestination): Observable<void> {
    return this.dataService.put(`api/admin/UpdateDestination`, tourPackage);
  }

  // Method to delete destination
  deleteDestination(id: number): Observable<void> {
    return this.dataService.delete(`api/admin/DeleteDestination/${id}`);
  }
}
