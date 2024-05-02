import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminTourPackage } from '../adminModels/adminTourPackageModel';

@Injectable({
  providedIn: 'root'
})

export class AdminTourPackageService {
  private tourPackages: AdminTourPackage[] = [
    { id: 1, name: 'Tour Package 1', description: 'Description of Tour Package 1', price: 100 },
    { id: 2, name: 'Tour Package 2', description: 'Description of Tour Package 2', price: 150 },
    { id: 3, name: 'Tour Package 3', description: 'Description of Tour Package 3', price: 200 }
    // Add more tour packages as needed
  ];

  constructor() { }

  // Method to fetch all tour packages
  getTourPackages(): Observable<AdminTourPackage[]> {
    return of(this.tourPackages);
  }

  // Method to get a tour package by ID
  

  // Method to add a new tour package
  addTourPackage(tourPackage: AdminTourPackage): Observable<void> {
    this.tourPackages.push(tourPackage);
    return of();
  }

  // Method to update a tour package
  updateTourPackage(tourPackage: AdminTourPackage): Observable<void> {
    const index = this.tourPackages.findIndex(pkg => pkg.id === tourPackage.id);
    if (index !== -1) {
      this.tourPackages[index] = tourPackage;
    }
    return of();
  }

  // Method to delete a tour package
  deleteTourPackage(id: number): Observable<void> {
    this.tourPackages = this.tourPackages.filter(pkg => pkg.id !== id);
    return of();
  }
}
