import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {
  plans = [
    {
      title: 'Standard',
      features: [
        '12 Months contract',
        '$29 registration fee',
        'Access to all studios',
        'Live courses with coaches',
        'Simply pay by direct debit'
      ],
      price: '$25',
      link: '#'
    },
    {
      title: 'Premium',
      features: [
        'Monthly contract cancellation',
        'No registration fee',
        '1:1 training with Trainer',
        '1 time free meal plan',
        'Free drinks, Wi-Fi and Parking'
      ],
      price: '$45',
      link: '#'
    },
    {
      title: 'Ultimate',
      features: [
        'Free use of Sauna and Massage',
        'Free use of Swimming Pool',
        'Quarterly meal plans',
        'Free drinks, Wi-Fi and Parking'
      ],
      price: '$75',
      link: '#'
    }
  ];
}
