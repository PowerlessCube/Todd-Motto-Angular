import { Component } from '@angular/core';
// Reference our route, so import it
import { ActivatedRoute } from '@angular/router';

// Import our Observable and pluck methods.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { Mail } from '../../models/mail.interface';
// Need to resolve the data.
@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
  <!-- Bind the Observable to the view -->
    <div class="mail-view">
      <!-- message is async, from = name of the sender of our e-mail-->
      <h2>{{ (message | async).from }}</h2>
      <p>{{ (message | async).full }}</p>
    </div>
  `
})
export class MailViewComponent {
  //Return us an observable and use the pluck method to grab the message detail.
  message: Observable<Mail> = this.route.data.pluck('message');
  // inject our route into the constructor.
  constructor(private route: ActivatedRoute) {}
}
