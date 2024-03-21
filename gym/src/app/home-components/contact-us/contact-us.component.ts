import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactInfo = [
    {
      icon: 'fas fa-mobile-alt',
      label: 'Phone Number',
      value: '+1 310-392-6004'
    },
    {
      icon: 'fas fa-envelope-open',
      label: 'E-mail',
      value: 'Contact.Venice@goldsgym.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Address',
      value: 'Gold\'s Gym Venice, 360 Hampton Dr, Venice, CA 90291, United States'
    },
    {
      icon: 'fas fa-clock',
      label: 'Opening Hours',
      value: 'Monday - Sunday (5:00 AM to 11:00 PM)'
    }
  ];
}