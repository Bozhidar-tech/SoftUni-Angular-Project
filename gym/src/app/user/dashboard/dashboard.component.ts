import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }
  
  logout():void{
    localStorage.removeItem('user_id');
    this.router.navigate(['/home']);
  }

  redirectToStrengthTraining(): void {
    this.router.navigate(['/strength-training']);
  }
}
