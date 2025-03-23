import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'This service is fantastic! Highly recommended.'
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Outstanding experience! The team was very professional.'
    },
    {
      name: 'Robert Brown',
      rating: 5,
      comment: 'Exceptional quality and great support!'
    },
    {
      name: 'Emily Johnson',
      rating: 4,
      comment: 'A smooth and enjoyable experience. Would use again!'
    },
    {
      name: 'Michael Davis',
      rating: 3,
      comment: 'Good service, but there is room for improvement.'
    },
    {
      name: 'Sarah Wilson',
      rating: 5,
      comment: 'Absolutely amazing! Exceeded my expectations.'
    }
  ];
}
