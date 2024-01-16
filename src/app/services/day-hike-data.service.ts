import { Injectable } from '@angular/core';
import { DayHike } from '../models/dayHike';

@Injectable({
  providedIn: 'root'
})
export class DayHikeDataService {
  private dayHikesList :DayHike[] = [
    { id: 1, name: 'Mountain Trail', distance: 5, description: 'Moderate',image:'assets/img/package-1.jpg',destination:'Kashmir' },
    { id: 2, name: 'Waterfall Adventure', distance: 3, description: 'Easy' ,image:'assets/img/package-2.jpg',destination:'Kashmir'},
    { id: 3, name: 'Mountain Trail', distance: 3, description: 'Moderate',image:'assets/img/package-3.jpg' ,destination:'Kashmir'},
    { id: 4, name: 'Waterfall Adventure', distance: 2, description: 'Easy' ,image:'assets/img/package-1.jpg',destination:'Kashmir'},
    { id: 5, name: 'Mountain Trail', distance: 6, description: 'Moderate',image:'assets/img/package-2.jpg',destination:'Kashmir' },
    { id: 6, name: 'Waterfall Adventure', distance: 4.5, description: 'Easy',image:'assets/img/package-1.jpg' ,destination:'Kashmir'},
   
  ];
  selectedDayHike: DayHike | undefined;
  getDayHikes(): DayHike[] {
    return this.dayHikesList;
  }

  getDayHikeById(id: number): DayHike | undefined {
    return this.dayHikesList.find(hike => hike.id === id);
  }
  constructor() { }
}
