import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor(private authService: AuthService, private router: Router) {}


  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res=>{
      this.isLoggedIn = this.authService.isLoggedIn();
    });
  }

  logout(){
    localStorage.removeItem("user_id");
    this.authService.isLoggedIn$.next(false);
  }

}