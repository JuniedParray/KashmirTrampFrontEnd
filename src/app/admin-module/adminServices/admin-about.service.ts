import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ContactInfo } from '../adminModels/adminAbout';

@Injectable({
    providedIn: 'root'
})

export class AdminAboutService {
  
    constructor(private dataService: DataService) { }
    
    getAboutDetails() {
        return this.dataService.get<any>(`api/admin/GetAboutDetail`);
    }
    
    addUpdate(aboutDetail: ContactInfo): Observable<void> {
        return this.dataService.post(`api/admin/UpdateAboutDetail`, aboutDetail);
    }
}