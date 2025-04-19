import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  name: string = '';
  email: string = '';
  message: string = '';

  contactUs() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    alert('Thank you for contacting us!');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
