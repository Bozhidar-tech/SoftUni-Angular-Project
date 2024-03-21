import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerColumns = [
    {
      title: 'About us',
      links: [
        { label: 'Our Company', link: '#' },
        { label: 'Expansion', link: '#' },
        { label: 'Jobs', link: '#' }
      ]
    },
    {
      title: 'Collaborations',
      links: [
        { label: 'BGM / BGF', link: '#' },
        { label: 'Corporate Fitness', link: '#' },
        { label: 'Club Fitness', link: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Self-service', link: '#' },
        { label: 'Help & Contact', link: '#' },
        { label: 'Live Chat', link: '#' }
      ]
    }
  ];
}

