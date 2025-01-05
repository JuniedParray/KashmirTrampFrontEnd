import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  public baseUrl: string = 'https://localhost:7165';
  constructor() { }
}
