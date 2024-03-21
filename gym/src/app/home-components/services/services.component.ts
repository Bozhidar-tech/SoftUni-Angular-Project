import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent  {
  services = [
    {
      icon: 'fa-dumbbell',
      title: 'Body Building',
      description: 'Pursue your Body Building career with the help of our qualified trainers'
    },
    {
      icon: 'fa-person-walking',
      title: 'Fitness',
      description: 'Our trainers will help you with everything you need to accomplish your dream body'
    },
    {
      icon: 'fa-weight-hanging',
      title: 'Boxing',
      description: 'Improve your boxing skills with our boxing classes three times per week'
    },
    {
      icon: 'fa-dumbbell',
      title: 'Crossfit',
      description: 'Increase your endurance by participating weekly in our crossfit lessons'
    }
  ];
}