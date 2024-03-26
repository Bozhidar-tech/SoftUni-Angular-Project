import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { MembershipService } from 'src/app/shared/membership.service';
import { Membership } from 'src/app/types/membership';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  memberships: Membership[] = [];
  errorMessage: string = '';

  constructor(
    private membershipService: MembershipService,
  ) { }

  ngOnInit(): void {
    this.loadMemberships();
  }

  loadMemberships(): void {
    this.membershipService.getAllMemberships().pipe(
      catchError(error => {
        console.error('Error fetching memberships:', error);
        this.errorMessage = 'Failed to fetch memberships. Please try again later.';
        throw this.errorMessage;
      })
    ).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.memberships = response.data || [];
        } else {
          console.error('Failed to fetch memberships:', response);
          this.errorMessage = 'Failed to fetch memberships. Please try again later.';
          throw this.errorMessage;
        }
      }
    });
  }
}