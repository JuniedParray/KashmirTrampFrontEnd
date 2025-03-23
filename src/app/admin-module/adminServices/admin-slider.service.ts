import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { SliderInfo } from '../adminModels/adminSlider';

@Injectable({
  providedIn: 'root'
})

export class AdminSliderService {


  constructor(private dataService : DataService) { }
  

    getSliders() {
      return this.dataService.get<any>(`api/admin/GetSliders`);
    }
 
  getById(id: Number) {
    return this.dataService.get<any>(`api/admin/GetSliderById/${id}`);
  }

  
  add(slider: SliderInfo): Observable<void> {
    return this.dataService.post(`api/admin/CreateSlider`, slider);
  }


  update(slider: SliderInfo): Observable<void> {
    return this.dataService.post(`api/admin/UpdateSlider`, slider);
  }


  delete(id: number): Observable<void> {
    return this.dataService.post(`api/admin/DeleteSlider/${id}`,null);
  }
}
