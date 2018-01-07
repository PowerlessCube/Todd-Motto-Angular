import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <!-- Add events to router outlets-->
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDectivate($event)">
      </router-outlet>
    </div>
  `
})
export class MailAppComponent {
  // Our component has been instantiated.
  onActivate(event) {
    console.log('Activate', event);
  }

  // Our component has been destroyed
  onDeactivate(event) {
    console.log('Deactivate', event);
  }

}
