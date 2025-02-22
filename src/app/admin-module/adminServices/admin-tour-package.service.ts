import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AdminTourPackage } from '../adminModels/adminTourPackageModel';
import { DataService } from 'src/app/services/data.service';
import { Destination } from 'src/app/models/destination';

@Injectable({
  providedIn: 'root'
})

export class AdminTourPackageService {
  
  private tourPackages: AdminTourPackage[] = [];

  constructor(private dataService : DataService) { }
  
   // Fetch all packages from the API
     fetchPackages(): Observable<AdminTourPackage[]> {
      return this.dataService.get<AdminTourPackage[]>('api/admin/GetTourPackages').pipe(
        tap((packages: AdminTourPackage[]) => (this.tourPackages = packages)) // Cache the packages locally
      );
    }

    getDestinations() {
      return this.dataService.get<any>(`api/admin/GetDestinations`);
    }
  // Method to get a tour package by ID
  getTourPackageById(id: Number) {
    return this.dataService.get<AdminTourPackage>(`api/admin/GetPackageById/${id}`);
  }

  // Method to add a new tour package
  addTourPackage(tourPackage: AdminTourPackage): Observable<void> {
    return this.dataService.post(`api/admin/CreatePackage`, tourPackage);
  }

  // Method to update a tour package
  updateTourPackage(tourPackage: AdminTourPackage): Observable<void> {
    return this.dataService.put(`api/admin/UpdatePackage`, tourPackage);
  }

  // Method to delete a tour package
  deleteTourPackage(id: number): Observable<void> {
    return this.dataService.delete(`api/admin/DeletePackage/${id}`);
  }
}
