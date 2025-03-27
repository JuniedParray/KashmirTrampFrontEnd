import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AdminTourPackageService } from 'src/app/admin-module/adminServices/admin-tour-package.service';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements AfterViewInit  {
  @Input() destinations: Destination[] = [];
  constructor(
    private packageService: AdminTourPackageService
     
  ) { }

  ngOnInit(): void {
   
  }


  ngAfterViewInit(): void {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
      bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Fetch input values
        const nameInput = document.getElementById("name") as HTMLInputElement;
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const datetimeInput = document.getElementById("datetime") as HTMLInputElement;
        const destinationInput = document.getElementById("select1") as HTMLSelectElement;
        const messageInput = document.getElementById("message") as HTMLTextAreaElement;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const datetime = datetimeInput.value.trim();
        const destination = destinationInput.options[destinationInput.selectedIndex].text.trim();
        const message = messageInput.value.trim();

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(el => el.remove());

        let isValid = true;

        // Validation checks
        function showError(input: HTMLElement, message: string) {
          const error = document.createElement("p");
          error.className = "error-message";
          error.style.color = "red";
          error.textContent = message;
          input.parentElement?.appendChild(error);
          isValid = false;
        }

        if (!name) showError(nameInput, "Name is required.");
        if (!email) showError(emailInput, "Email is required.");
        else if (!/^\S+@\S+\.\S+$/.test(email)) showError(emailInput, "Enter a valid email address.");
        
        if (!datetime) showError(datetimeInput, "Date and time are required.");
        else if (new Date(datetime) < new Date()) showError(datetimeInput, "Date must be in the future.");

        if (!destination) showError(destinationInput, "Please select a destination.");
        if (!message) showError(messageInput, "Special request cannot be empty.");

        // Stop form submission if validation fails
        if (!isValid) return;

        const bookingData = {
          Id: 0, // Assuming the Id is auto-generated in your API
          Name: name,
          EmailAddress: email,
          DateTime: datetime,
          Destination: destination,
          PackageName: 0,
          SpecialRequest: message
        };

        fetch("https://api.valleyvoyages.com/api/home/AddBooking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bookingData)
        })
        .then(response => {
          if (response.ok) {
            return response.json().then(data => {
              alert("Booking successful.We will get back to you shortly.");
            });
          } else if (response.status === 404) {
            throw new Error("Booking failed: Not Found.");
          } else {
            throw new Error("An unexpected error occurred.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Error submitting booking. Please try again.");
        });
      });
    }
}

}