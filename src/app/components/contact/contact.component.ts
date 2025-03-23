import { DataService } from 'src/app/services/data.service';
import { ContactDetails } from './../../models/contact-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contactInfo : ContactDetails = {address: '', email: '', mobile: '',fbLink: '',instaLink: '',youTubeLink: ''}; 
 constructor(private dataService: DataService) {}
 contactData: any = {
  name: '',
  email: '',
  subject: '',
  message: ''
};
  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void{
      this.dataService.get<{aboutDetail: ContactDetails}>('api/home/getLayoutDetails').subscribe(
        (response) => {
          this.contactInfo = response.aboutDetail;
          
        },
        (error) => {
          console.error('Error fetching layout details', error)
        }
  
      );
  }
  
  submitForm() {
    this.dataService.post("api/home/AddEnqueries",this.contactData).subscribe({
      next: (response) => {
        console.log('Form submitted successfully', response);
        alert('Your message has been sent!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error submitting form', error);
        alert('Failed to send message. Please try again later.');
      }
    });
  }

  resetForm() {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
