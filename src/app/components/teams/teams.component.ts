import { Component, Input } from '@angular/core';
import { Teams } from 'src/app/models/teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
   @Input() team : Teams | undefined
 }
