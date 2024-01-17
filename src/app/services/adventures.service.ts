import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdventuresService {
  private activities :any[] = [
    { id: 1, name: 'River Rafting',  description: 'Moderate',image:'assets/img/package-1.jpg',destination:'Kashmir' },
    { id: 2, name: 'Skiing',description: 'Easy' ,image:'assets/img/package-2.jpg',destination:'Kashmir'},
    { id: 3, name: 'Shikara Ride',description: 'Moderate',image:'assets/img/package-3.jpg' ,destination:'Kashmir'},
    { id: 4, name: 'Paragliding', description: 'Easy' ,image:'assets/img/package-1.jpg',destination:'Kashmir'},
    { id: 5, name: 'Zorbing',  description: 'Moderate',image:'assets/img/package-2.jpg',destination:'Kashmir' },
    { id: 6, name: 'Zip line', description: 'Easy',image:'assets/img/package-1.jpg' ,destination:'Kashmir'},
   
  ];
  selectedDayHike: any | undefined;

  getAllActivities(): any[] {
    return this.activities;
  }

  getActivityById(id: number): any | undefined {
    return this.activities.find(a => a.id === id);
  }
  constructor() { }
}
