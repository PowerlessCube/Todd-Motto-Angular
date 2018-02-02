import { Component, Input } from '@angular/core';
// Add router import
import { Router } from '@angular/router';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <!-- Creating a click event call back navigateToMessage -->
    <a 
      class="mail-item"
      (click)="navigateToMessage()">
      <!-- routerLinkActive="active"> -->
      <!-- We loose the routerLinkActive functionality by setting it up this way, depends on implementation -->
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;
  // Add the constructor and inject the router into the component
  constructor(private router: Router) {}
  navigateToMessage() {
    // Setting up the router to navigate to your outlet.
    this.router.navigate(
      ['', { outlets: { pane: ['message', this.message.id] } }]
    );
  }
}
