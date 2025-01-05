import { Injectable, OnInit } from '@angular/core';
import { DayHike } from '../models/dayHike';
import { DataService } from './data.service';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayHikeDataService {
  private dayHikesList: DayHike[] = [
    { id: 1, name: 'Mountain Trail', distance: 5, description: 'Moderate', image: 'assets/img/package-1.jpg', destination: 'Kashmir' },
    { id: 2, name: 'Waterfall Adventure', distance: 3, description: 'Easy', image: 'assets/img/package-2.jpg', destination: 'Kashmir' },
    { id: 3, name: 'Mountain Trail', distance: 3, description: 'Moderate', image: 'assets/img/package-3.jpg', destination: 'Kashmir' },
    { id: 4, name: 'Waterfall Adventure', distance: 2, description: 'Easy', image: 'assets/img/package-1.jpg', destination: 'Kashmir' },
    { id: 5, name: 'Mountain Trail', distance: 6, description: 'Moderate', image: 'assets/img/package-2.jpg', destination: 'Kashmir' },
    { id: 6, name: 'Waterfall Adventure', distance: 4.5, description: 'Easy', image: 'assets/img/package-1.jpg', destination: 'Kashmir' },
   
  ];
  selectedDayHike: DayHike | undefined;
  getDayHikes(): DayHike[] {
    return this.dayHikesList;
  }

  constructor(private dataService: DataService) { }
  // Fetch all dayHikes from the API
  fetchDayHikes(): Observable<DayHike[]> {
    return this.dataService.get<DayHike[]>('api/home/GetDayHikes').pipe(
      tap((dayHikes: DayHike[]) => (this.dayHikesList = dayHikes)) // Cache the packages locally
    );
  }

  // Fetch a package by ID (from cache if available, otherwise from API)
  getDayHikeById(id: number): Observable<DayHike | undefined> {
      const cachedDayHike = this.dayHikesList.find((p) => p.id === id);
      if (cachedDayHike) {
        return of(cachedDayHike); // Return from cache
      } else {
        // Fetch from API if not in cache
        return this.dataService.get<DayHike>(`${"api/home/GetDayHikeById"}/${id}`).pipe(
          tap((packageInfo: DayHike) => {
            if (packageInfo) {
              this.dayHikesList.push(packageInfo); // Add to cache
            }
          })
        );
      }
    }
}
