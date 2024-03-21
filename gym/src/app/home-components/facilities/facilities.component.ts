import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent {
  facilities = [
    {
      icon: 'fa-dumbbell',
      title: 'Quality Equipment',
      description: 'Nautilus One® equipment combines revolutionary weight stack technology and the most intuitive and user-friendly selection method ever created: a dial.'
    },
    {
      icon: 'fa-wifi',
      title: 'Free Wifi',
      description: 'Free Wi-Fi with unlimited data for our members'
    },
    {
      icon: 'fa-person-swimming',
      title: 'Swimming Pool',
      description: 'Olympic-size swimming pool, water massage, and sauna for our members'
    },
  ];
}

