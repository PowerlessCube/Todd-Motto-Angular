import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../../models/mail.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck'

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <!-- Bind it to value and display it via async pipe -->
    <h2>{{ title | async }}</h2>
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent {
  // either bind the whole object or pluck the particular value.
  // 4. plucks the particular item, bind to messages value and display it using async pipe
  messages: Observable<Mail[]> = this.route.data.pluck('messages');
  title: Observable<string> = this.route.params.pluck('name');
  constructor(private route: ActivatedRoute) {}
}
