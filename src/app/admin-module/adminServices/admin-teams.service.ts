import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { TeamMember } from '../adminModels/admin-teams';

@Injectable({
  providedIn: 'root'
})

export class AdminTeamMembersService {


  constructor(private dataService : DataService) { }
  

    getData() {
      return this.dataService.get<any>(`api/admin/Getteams`);
    }
 
  getById(id: Number) {
    return this.dataService.get<any>(`api/admin/GetTeamById/${id}`);
  }

  
  add(teamMember: TeamMember): Observable<void> {
    return this.dataService.post(`api/admin/CreateTeam`, teamMember);
  }


  update(teamMember: TeamMember): Observable<void> {
    return this.dataService.put(`api/admin/UpdateTeam`, teamMember);
  }


  delete(id: number): Observable<void> {
    return this.dataService.delete(`api/admin/DeleteTeam/${id}`);
  }
}
