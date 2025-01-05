import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient,private apiConfig: ApiConfigService) {
    
  }
   // Generic GET request
   get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiConfig.baseUrl}/${endpoint}`);
  }

  // Generic POST request
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiConfig.baseUrl}/${endpoint}`, body);
  }

  // Generic PUT request
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiConfig.baseUrl}/${endpoint}`, body);
  }

  // Generic DELETE request
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiConfig.baseUrl}/${endpoint}`);
  }
  
}
