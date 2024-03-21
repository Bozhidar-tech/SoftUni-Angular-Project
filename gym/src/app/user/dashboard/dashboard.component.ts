import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  navigationItems = [
    { icon: 'fa-solid fa-house', label: 'Home', link: '/home' },
    { icon: 'fa-solid fa-user', label: 'Edit Profile', link: '/edit-profile' },
    { icon: 'fa-solid fa-dumbbell', label: 'My Workouts', link: '/workouts-tracker' },
    { icon: 'fa-brands fa-nutritionix', label: 'Nutrition', link: '#' },
    { icon: 'fa-solid fa-cart-shopping', label: 'Store', link: '/store' },
    { icon: 'fas fa-question-circle', label: 'Help', link: '#' },
    { icon: 'fas fa-sign-out-alt', label: 'Log out', link: '' }
  ];
  
  fitnessPrograms = [
    { icon: 'fas fa-running', title: 'Cardio Workout', description: 'Improve your cardiovascular health and stamina. Join our high-energy cardio programs.' },
    { icon: 'fas fa-dumbbell', title: 'Strength Training', description: 'Build strength and muscle with our customized strength training exercises.' },
    { icon: 'fas fa-leaf', title: 'Yoga & Meditation', description: 'Experience the benefits of yoga and meditation for a balanced and healthy lifestyle.' },
    { icon: 'fas fa-bicycle', title: 'Cycling Classes', description: 'Join our cycling classes to boost your endurance and have fun while staying fit.' }
  ];

  fitnessProgress = [
    { title: 'Running Challenge', progress: '80%', icon: 'fas fa-running' },
    { title: 'Strength Training Program', progress: '50%', icon: 'fas fa-dumbbell' },
    { title: 'Yoga Mastery', progress: '30%', icon: 'fas fa-leaf' }
  ];

  constructor(private router: Router) { }
  
  logout():void{
    localStorage.removeItem('user_id');
    this.router.navigate(['/home']);
  }
}
