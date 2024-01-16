import { Component, Input } from '@angular/core';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {
  @Input() destination!: Destination;
}
