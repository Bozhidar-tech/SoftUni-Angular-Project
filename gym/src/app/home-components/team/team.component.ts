import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  trainers = [
    {
      name: 'Chris Bumstead',
      role: 'Bodybuilding Trainer',
      image: '../../assets/chris.jpg',
      socialMedia: {
        facebook: 'https://www.facebook.com/Chris.Bumstead.Cbum',
        twitter: 'https://twitter.com/c_bumstead',
        instagram: 'https://www.instagram.com/cbum/'
      }
    },
    {
      name: 'Canelo Alvarez',
      role: 'Boxing Trainer',
      image: '../../assets/canelo.jpg',
      socialMedia: {
        facebook: 'https://www.facebook.com/SaulCaneloAlvarez',
        twitter: 'https://twitter.com/Canelo',
        instagram: 'https://www.instagram.com/canelo/'
      }
    },
    {
      name: 'Greg Doucette',
      role: 'Fitness Trainer',
      image: '../../assets/greg.png',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://www.twitter.com/',
        instagram: 'https://www.instagram.com/gregdoucetteifbbpro/'
      }
    }
  ];
}