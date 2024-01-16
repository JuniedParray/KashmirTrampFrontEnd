import { Component, Input } from '@angular/core';
import { ContactDetails } from 'src/app/models/contact-details';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {
@Input() contactInfo :ContactDetails | undefined
}
