import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { AdminDayHike } from '../adminModels/adminDayHike';

@Injectable({
  providedIn: 'root'
})

export class AdminDayHikesService {


  constructor(private dataService : DataService) { }
  

    getDayHikes() {
      return this.dataService.get<any>(`api/admin/GetDayHikes`);
    }
 
  getById(id: Number) {
    return this.dataService.get<any>(`api/admin/GetDayHikeById/${id}`);
  }

  
  add(tourPackage: AdminDayHike): Observable<void> {
    return this.dataService.post(`api/admin/CreateDayHike`, tourPackage);
  }


  update(tourPackage: AdminDayHike): Observable<void> {
    return this.dataService.post(`api/admin/UpdateDayHike`, tourPackage);
  }


  delete(id: number): Observable<void> {
    return this.dataService.post(`api/admin/DeleteDayHike/${id}`,null);
  }
}
