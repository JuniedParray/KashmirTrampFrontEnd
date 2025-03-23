import { Injectable, OnInit } from '@angular/core';
import { DayHike } from '../models/dayHike';
import { DataService } from './data.service';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayHikeDataService {
  private dayHikesList: DayHike[] = [];
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

  // Fetch a package by ID
  getDayHikeById(id: number): Observable<DayHike | undefined> {
        // Fetch from API if not in cache
        return this.dataService.get<DayHike>(`api/home/GetDayHikeById/${id}`).pipe(
          tap((dayHike: DayHike) => {
            
            if (dayHike) {
              this.dayHikesList.push(dayHike); // Add to cache
            }
          })
        );
      
    }
}
