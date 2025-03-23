import { Injectable } from '@angular/core';
import { PackageInfo } from '../models/package-info';
import { DataService } from './data.service';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private packagesList1: PackageInfo[] = []; // Local cache of packages
  packagesList :PackageInfo[] =[] 

  constructor(private dataService: DataService) { }
  
   // Fetch all packages from the API
   fetchPackages(): Observable<PackageInfo[]> {
    return this.dataService.get<PackageInfo[]>('api/home/GetTourPackages').pipe(
      tap((packages: PackageInfo[]) => (this.packagesList = packages)) // Cache the packages locally
    );
  }

  // Get all cached packages
  getPackages(): PackageInfo[] {
    return this.packagesList;
  }

  // Fetch a package by ID (from cache if available, otherwise from API)
  getPackageById(id: number): Observable<PackageInfo | undefined> {
    const cachedPackage = this.packagesList.find((p) => p.id === id);
    if (cachedPackage) {
      return of(cachedPackage); // Return from cache
    } else {
      // Fetch from API if not in cache
      return this.dataService.get<PackageInfo>(`api/home/GetPackageById/${id}`).pipe(
        tap((packageInfo: PackageInfo) => {
          if (packageInfo) {
            this.packagesList.push(packageInfo); // Add to cache
          }
        })
      );
    }
  }
  
}
