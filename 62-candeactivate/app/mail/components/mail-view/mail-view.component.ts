import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async).from }}</h2>
      <p>{{ (message | async).full }}</p>
    </div>
    <div class="mail-reply">
      <!-- Binding the value of reply to and listens for updateReply -->
      <textarea
        (change)="updateReply($event.target.value)"
        placeholder="Type your reply..."
        [value]="reply">
      </textarea>
      <!-- Add a send button to the server -->
      <button type="button" (click)="sendReply()">
        Send
      </button>
    </div>
  `
})
// Add a property to our class that checks for unsaved changes
export class MailViewComponent implements OnInit {
  reply = '';
  hasUnsavedChanges = false; // default value
  message: Observable<Mail> = this.route.data.pluck('message');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Added a subscribe to reset the value every time we change a particular route. So it won't persist when we change messages.
    this.route.params.subscribe(() => {
      //reply instantiated as an empty string
      this.reply = '';
      // ensures that hasUnsaved is reset back to false when navigating to a new route.
      this.hasUnsavedChanges = false;
    });
  }

  updateReply(value: string) {
    // assigns the value to the reply property
    this.reply = value;
    // toggles the flag for unsaved changes
    this.hasUnsavedChanges = true;
  }

  sendReply() {
    // Sends the reply to the server
    console.log('Sent!', this.reply);
    //toggles the flag for unsaved changes
    this.hasUnsavedChanges = false;
  }
}
