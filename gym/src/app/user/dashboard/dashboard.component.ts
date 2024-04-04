import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isLoggedIn: boolean = false;

  constructor(private router: Router,    private authService: AuthService) { }
  
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res => {
      this.isLoggedIn = this.authService.isLoggedIn();
    });
  }

  logout(){
    localStorage.removeItem("user_id");
    this.authService.isLoggedIn$.next(false);
  }

  redirectToStrengthTraining(): void {
    this.router.navigate(['/strength-training']);
  }
}
