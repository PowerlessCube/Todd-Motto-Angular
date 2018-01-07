import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <!-- Router Link example -->
    <!--  default value, outlets, pane arguments with message and id-->
    <!-- [routerLink]="['', { outlets: { pane: ['message', message.id] } }]" -->
    <a
      class="mail-item"
      [routerLink]="['', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active">
      <!-- routerLinkActive makes the border left active -->
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
}
