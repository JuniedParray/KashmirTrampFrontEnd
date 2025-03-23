import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient, private apiConfig: ApiConfigService) {}

  // 🔹 Get Auth Headers
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Get token from storage
    
    return new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    });
  }

  // 🔹 Generic GET request with Auth
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiConfig.baseUrl}/${endpoint}`, { headers: this.getAuthHeaders() });
  }

  // 🔹 Generic POST request with Auth
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiConfig.baseUrl}/${endpoint}`, body, { headers: this.getAuthHeaders() });
  }

  // 🔹 Generic PUT request with Auth
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiConfig.baseUrl}/${endpoint}`, body, { headers: this.getAuthHeaders() });
  }

  // 🔹 Generic DELETE request with Auth
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiConfig.baseUrl}/${endpoint}`, { headers: this.getAuthHeaders() });
  }
}
