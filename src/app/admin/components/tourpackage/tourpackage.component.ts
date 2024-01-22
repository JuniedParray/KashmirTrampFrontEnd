import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tourpackage',
  templateUrl: './tourpackage.component.html',
  styleUrls: ['./tourpackage.component.scss']
})
export class TourpackageComponent {
  @Input() tourPackage: any; // Input to receive the tour package for updating
  @Output() submit = new EventEmitter<any>(); // Output to emit the form submission

  isUpdating = false;

  ngOnInit() {
    // Check if there's an existing package for updating
    this.isUpdating = !!this.tourPackage;
    // If not, initialize an empty package
    this.tourPackage = this.tourPackage || {};
  }

  submitForm() {
    this.submit.emit(this.tourPackage);
  }
}
